import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { 
  createSuccessResponse, 
  ApiError, 
  withErrorHandler 
} from '@/lib/api-helpers';
import { 
  createEmployeeSchema, 
  employeeQuerySchema 
} from '@/lib/validations/employee';
import { fakeUsers } from '@/constants/mock-api';

// Helper function to check authentication
async function checkAuthentication() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    throw new Error('Unauthorized - User not authenticated');
  }
  
  return user;
}

// Helper function to convert mock user data to employee format
function convertToEmployee(user: any) {
  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1), // Capitalize first letter
    date_of_birth: user.date_of_birth,
    street: user.street,
    city: user.city,
    state: user.state,
    country: user.country,
    zipcode: user.zipcode,
    longitude: user.longitude,
    latitude: user.latitude,
    job: user.job,
    profile_picture: user.profile_picture,
  };
}

// GET /api/employees - List employees with pagination and filtering
export const GET = withErrorHandler(async (request: NextRequest) => {
  // Check authentication
  await checkAuthentication();
  
  // Parse query parameters
  const { searchParams } = new URL(request.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  
  const validatedQuery = employeeQuerySchema.parse(queryParams);
  
  // Get mock data
  const mockResult = await fakeUsers.getUsers({
    page: validatedQuery.page,
    limit: validatedQuery.limit,
    search: validatedQuery.search,
    genders: validatedQuery.gender,
  });
  
  // Convert mock users to employee format
  const employees = mockResult.users.map(convertToEmployee);
  
  // Apply additional filters if needed
  let filteredEmployees = employees;
  
  if (validatedQuery.city) {
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.city.toLowerCase().includes(validifiedQuery.city!.toLowerCase())
    );
  }
  
  if (validatedQuery.country) {
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.country.toLowerCase().includes(validifiedQuery.country!.toLowerCase())
    );
  }
  
  if (validatedQuery.job) {
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.job.toLowerCase().includes(validifiedQuery.job!.toLowerCase())
    );
  }
  
  // Apply sorting
  if (validatedQuery.sort_by) {
    filteredEmployees.sort((a, b) => {
      const aValue = a[validatedQuery.sort_by as keyof typeof a];
      const bValue = b[validatedQuery.sort_by as keyof typeof b];
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      const comparison = String(aValue).localeCompare(String(bValue));
      return validatedQuery.sort_order === 'desc' ? -comparison : comparison;
    });
  }
  
  // Apply pagination after filtering and sorting
  const totalEmployees = filteredEmployees.length;
  const startIndex = (validatedQuery.page - 1) * validatedQuery.limit;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + validatedQuery.limit);
  
  return createSuccessResponse({
    employees: paginatedEmployees,
    pagination: {
      page: validatedQuery.page,
      limit: validatedQuery.limit,
      total: totalEmployees,
      totalPages: Math.ceil(totalEmployees / validatedQuery.limit),
      hasNext: startIndex + paginatedEmployees.length < totalEmployees,
      hasPrev: validatedQuery.page > 1,
    },
  }, 'Employees retrieved successfully');
});

// POST /api/employees - Create a new employee
export const POST = withErrorHandler(async (request: NextRequest) => {
  // Check authentication
  await checkAuthentication();
  
  // Parse and validate request body
  const body = await request.json();
  const validatedData = createEmployeeSchema.parse(body);
  
  // Check if email already exists in mock data
  const existingUser = fakeUsers.records.find(user => user.email === validatedData.email);
  if (existingUser) {
    return ApiError.conflict('Employee with this email already exists');
  }
  
  // Create new employee with mock data structure
  const newId = Math.max(...fakeUsers.records.map(u => u.id)) + 1;
  const newUser = {
    id: newId,
    first_name: validatedData.first_name,
    last_name: validatedData.last_name,
    email: validatedData.email,
    phone: validatedData.phone,
    street: validatedData.street,
    city: validatedData.city,
    state: validatedData.state,
    country: validatedData.country,
    zipcode: validatedData.zipcode,
    longitude: validatedData.longitude || 0,
    latitude: validatedData.latitude || 0,
    gender: validatedData.gender.toLowerCase() as 'male' | 'female',
    date_of_birth: validatedData.date_of_birth,
    job: validatedData.job,
    profile_picture: validatedData.profile_picture || `https://api.slingacademy.com/public/sample-users/${newId}.png`,
  };
  
  // Add to mock data
  fakeUsers.records.push(newUser);
  
  // Convert to employee format for response
  const employee = convertToEmployee(newUser);
  
  return createSuccessResponse(
    employee,
    'Employee created successfully',
    201
  );
});