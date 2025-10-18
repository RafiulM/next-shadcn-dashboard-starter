import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { 
  createSuccessResponse, 
  ApiError, 
  withErrorHandler 
} from '@/lib/api-helpers';
import { 
  updateEmployeeSchema, 
  employeeIdSchema 
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
    gender: user.gender.charAt(0).toUpperCase() + user.gender.slice(1),
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

// GET /api/employees/[employeeId] - Get a specific employee
export const GET = withErrorHandler(async (
  request: NextRequest,
  { params }: { params: { employeeId: string } }
) => {
  // Check authentication
  await checkAuthentication();
  
  // Validate employee ID
  const { employeeId } = employeeIdSchema.parse(params);
  
  // Find employee in mock data
  const user = fakeUsers.records.find(u => u.id === employeeId);
  
  if (!user) {
    return ApiError.notFound('Employee not found');
  }
  
  const employee = convertToEmployee(user);
  
  return createSuccessResponse(employee, 'Employee retrieved successfully');
});

// PUT /api/employees/[employeeId] - Update a specific employee
export const PUT = withErrorHandler(async (
  request: NextRequest,
  { params }: { params: { employeeId: string } }
) => {
  // Check authentication
  await checkAuthentication();
  
  // Validate employee ID
  const { employeeId } = employeeIdSchema.parse(params);
  
  // Find employee in mock data
  const userIndex = fakeUsers.records.findIndex(u => u.id === employeeId);
  
  if (userIndex === -1) {
    return ApiError.notFound('Employee not found');
  }
  
  // Parse and validate request body
  const body = await request.json();
  const validatedData = updateEmployeeSchema.parse(body);
  
  // Check if email already exists (if email is being updated)
  if (validatedData.email) {
    const existingUser = fakeUsers.records.find(u => u.email === validatedData.email && u.id !== employeeId);
    if (existingUser) {
      return ApiError.conflict('Employee with this email already exists');
    }
  }
  
  // Update employee in mock data
  const updatedUser = { ...fakeUsers.records[userIndex] };
  
  // Map the validated data to mock user structure
  if (validatedData.first_name) updatedUser.first_name = validatedData.first_name;
  if (validatedData.last_name) updatedUser.last_name = validatedData.last_name;
  if (validatedData.email) updatedUser.email = validatedData.email;
  if (validatedData.phone) updatedUser.phone = validatedData.phone;
  if (validatedData.gender) updatedUser.gender = validatedData.gender.toLowerCase() as 'male' | 'female';
  if (validatedData.date_of_birth) updatedUser.date_of_birth = validatedData.date_of_birth;
  if (validatedData.street) updatedUser.street = validatedData.street;
  if (validatedData.city) updatedUser.city = validatedData.city;
  if (validatedData.state) updatedUser.state = validatedData.state;
  if (validatedData.country) updatedUser.country = validatedData.country;
  if (validatedData.zipcode) updatedUser.zipcode = validatedData.zipcode;
  if (validatedData.longitude !== undefined) updatedUser.longitude = validatedData.longitude;
  if (validatedData.latitude !== undefined) updatedUser.latitude = validatedData.latitude;
  if (validatedData.job) updatedUser.job = validatedData.job;
  if (validatedData.profile_picture !== undefined) updatedUser.profile_picture = validatedData.profile_picture;
  
  fakeUsers.records[userIndex] = updatedUser;
  
  const employee = convertToEmployee(updatedUser);
  
  return createSuccessResponse(employee, 'Employee updated successfully');
});

// DELETE /api/employees/[employeeId] - Delete a specific employee
export const DELETE = withErrorHandler(async (
  request: NextRequest,
  { params }: { params: { employeeId: string } }
) => {
  // Check authentication
  await checkAuthentication();
  
  // Validate employee ID
  const { employeeId } = employeeIdSchema.parse(params);
  
  // Find employee in mock data
  const userIndex = fakeUsers.records.findIndex(u => u.id === employeeId);
  
  if (userIndex === -1) {
    return ApiError.notFound('Employee not found');
  }
  
  // Remove employee from mock data
  const deletedUser = fakeUsers.records[userIndex];
  fakeUsers.records.splice(userIndex, 1);
  
  const employee = convertToEmployee(deletedUser);
  
  return createSuccessResponse(
    employee,
    'Employee deleted successfully'
  );
});