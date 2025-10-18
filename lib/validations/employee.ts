import { z } from 'zod';

// Base employee schema with common fields
const employeeBaseSchema = {
  first_name: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  
  last_name: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .max(255, 'Email cannot exceed 255 characters'),
  
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+]?[\d\s()-]+$/, 'Phone number can only contain digits, spaces, +, -, and parentheses')
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number cannot exceed 20 characters'),
  
  gender: z
    .enum(['Male', 'Female', 'Other', 'Prefer not to say'], {
      errorMap: () => ({ message: 'Gender must be Male, Female, Other, or Prefer not to say' })
    }),
  
  date_of_birth: z
    .string()
    .min(1, 'Date of birth is required')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date of birth must be in YYYY-MM-DD format')
    .refine((date) => {
      const parsedDate = new Date(date);
      const now = new Date();
      const minDate = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
      const maxDate = new Date(now.getFullYear() - 16, now.getMonth(), now.getDate());
      return !isNaN(parsedDate.getTime()) && parsedDate <= maxDate && parsedDate >= minDate;
    }, 'Date of birth must be between 16 and 100 years ago'),
  
  street: z
    .string()
    .min(1, 'Street address is required')
    .min(5, 'Street address must be at least 5 characters')
    .max(255, 'Street address cannot exceed 255 characters'),
  
  city: z
    .string()
    .min(1, 'City is required')
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City cannot exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'City can only contain letters, spaces, hyphens, and apostrophes'),
  
  state: z
    .string()
    .min(1, 'State is required')
    .min(2, 'State must be at least 2 characters')
    .max(100, 'State cannot exceed 100 characters'),
  
  country: z
    .string()
    .min(1, 'Country is required')
    .min(2, 'Country must be at least 2 characters')
    .max(100, 'Country cannot exceed 100 characters'),
  
  zipcode: z
    .string()
    .min(1, 'Zip code is required')
    .min(3, 'Zip code must be at least 3 characters')
    .max(20, 'Zip code cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9\s-]+$/, 'Zip code can only contain letters, numbers, spaces, and hyphens'),
  
  job: z
    .string()
    .min(1, 'Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title cannot exceed 100 characters'),
  
  longitude: z
    .number()
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180, 'Longitude must be between -180 and 180')
    .optional(),
  
  latitude: z
    .number()
    .min(-90, 'Latitude must be between -90 and 90')
    .max(90, 'Latitude must be between -90 and 90')
    .optional(),
  
  profile_picture: z
    .string()
    .url('Profile picture must be a valid URL')
    .or(z.literal(null))
    .or(z.literal(''))
    .optional(),
};

// Schema for creating a new employee
export const createEmployeeSchema = z.object(employeeBaseSchema);

// Schema for updating an employee (all fields optional)
export const updateEmployeeSchema = z.object({
  first_name: employeeBaseSchema.first_name.optional(),
  last_name: employeeBaseSchema.last_name.optional(),
  email: employeeBaseSchema.email.optional(),
  phone: employeeBaseSchema.phone.optional(),
  gender: employeeBaseSchema.gender.optional(),
  date_of_birth: employeeBaseSchema.date_of_birth.optional(),
  street: employeeBaseSchema.street.optional(),
  city: employeeBaseSchema.city.optional(),
  state: employeeBaseSchema.state.optional(),
  country: employeeBaseSchema.country.optional(),
  zipcode: employeeBaseSchema.zipcode.optional(),
  job: employeeBaseSchema.job.optional(),
  longitude: employeeBaseSchema.longitude.optional(),
  latitude: employeeBaseSchema.latitude.optional(),
  profile_picture: employeeBaseSchema.profile_picture.optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: 'At least one field must be provided for update',
});

// Schema for employee ID parameter
export const employeeIdSchema = z.object({
  employeeId: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Employee ID must be a positive integer',
    }),
});

// Schema for query parameters
export const employeeQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => val ? parseInt(val, 10) : 1)
    .refine((val) => val > 0, { message: 'Page must be greater than 0' }),
  
  limit: z
    .string()
    .optional()
    .transform((val) => val ? parseInt(val, 10) : 10)
    .refine((val) => val > 0 && val <= 100, { message: 'Limit must be between 1 and 100' }),
  
  search: z
    .string()
    .optional()
    .transform((val) => val?.trim()),
  
  sort_by: z
    .enum(['first_name', 'last_name', 'email', 'job', 'city', 'country'])
    .optional(),
  
  sort_order: z
    .enum(['asc', 'desc'])
    .optional(),
  
  gender: z
    .enum(['Male', 'Female', 'Other', 'Prefer not to say'])
    .optional(),
  
  city: z
    .string()
    .optional()
    .transform((val) => val?.trim()),
  
  country: z
    .string()
    .optional()
    .transform((val) => val?.trim()),
  
  job: z
    .string()
    .optional()
    .transform((val) => val?.trim()),
});

// Export types for use in components
export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;
export type EmployeeIdParams = z.infer<typeof employeeIdSchema>;
export type EmployeeQueryParams = z.infer<typeof employeeQuerySchema>;