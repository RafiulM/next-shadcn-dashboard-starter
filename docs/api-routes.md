# API Routes Documentation

This document describes the API route structure, response format, validation approach, and usage examples for the employee management system.

## Overview

The API routes are built using Next.js App Router and follow RESTful conventions. All endpoints include:

- **Authentication**: Protected routes requiring user authentication via Supabase
- **Validation**: Input validation using Zod schemas
- **Standardized Responses**: Consistent response format for all endpoints
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes

## Base URL

All API endpoints are prefixed with `/api`:

```
https://your-domain.com/api
```

## Authentication

All API endpoints require authentication using Supabase session cookies. The middleware automatically validates the user session and returns a `401 Unauthorized` response for unauthenticated requests.

## Standard Response Format

All API responses follow a consistent structure:

### Success Response (200-299)

```json
{
  "data": <response_data>,
  "error": null,
  "message": "Success message",
  "status": 200
}
```

### Error Response (400-599)

```json
{
  "data": null,
  "error": "Error description",
  "message": "Error message",
  "status": 400
}
```

## Employee Endpoints

### Get Employees (List)

**Endpoint**: `GET /api/employees`

**Description**: Retrieve a paginated list of employees with optional filtering and sorting.

**Query Parameters**:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number for pagination |
| `limit` | number | 10 | Number of items per page (max 100) |
| `search` | string | - | Search across first_name, last_name, email, job, city |
| `gender` | string | - | Filter by gender (Male, Female, Other, Prefer not to say) |
| `city` | string | - | Filter by city |
| `country` | string | - | Filter by country |
| `job` | string | - | Filter by job title |
| `sort_by` | string | - | Sort field (first_name, last_name, email, job, city, country) |
| `sort_order` | string | - | Sort order (asc, desc) |

**Example Request**:
```bash
GET /api/employees?page=1&limit=10&search=john&gender=Male&sort_by=last_name&sort_order=asc
```

**Success Response**:
```json
{
  "data": {
    "employees": [
      {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "phone": "+1-555-123-4567",
        "gender": "Male",
        "date_of_birth": "1990-01-15",
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "country": "USA",
        "zipcode": "10001",
        "longitude": -74.0060,
        "latitude": 40.7128,
        "job": "Software Engineer",
        "profile_picture": "https://example.com/avatar.jpg"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "totalPages": 3,
      "hasNext": true,
      "hasPrev": false
    }
  },
  "error": null,
  "message": "Employees retrieved successfully",
  "status": 200
}
```

### Create Employee

**Endpoint**: `POST /api/employees`

**Description**: Create a new employee record.

**Request Body**:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-123-4567",
  "gender": "Male",
  "date_of_birth": "1990-01-15",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "zipcode": "10001",
  "longitude": -74.0060,
  "latitude": 40.7128,
  "job": "Software Engineer",
  "profile_picture": "https://example.com/avatar.jpg"
}
```

**Validation Rules**:
- `first_name`, `last_name`: Required, 2-50 characters, letters/spaces/hyphens/apostrophes only
- `email`: Required, valid email format
- `phone`: Required, valid phone number format (10-20 characters)
- `gender`: Required, must be one of: "Male", "Female", "Other", "Prefer not to say"
- `date_of_birth`: Required, YYYY-MM-DD format, age 16-100 years
- `street`: Required, 5-255 characters
- `city`, `state`, `country`: Required, 2-100 characters
- `zipcode`: Required, 3-20 characters
- `job`: Required, 2-100 characters
- `longitude`: Optional, -180 to 180
- `latitude`: Optional, -90 to 90
- `profile_picture`: Optional, valid URL or null

**Success Response** (201):
```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    // ... other fields
  },
  "error": null,
  "message": "Employee created successfully",
  "status": 201
}
```

**Error Responses**:
- `400`: Validation errors or bad request
- `401`: Unauthorized
- `409`: Email already exists

### Get Employee (Details)

**Endpoint**: `GET /api/employees/[employeeId]`

**Description**: Retrieve details of a specific employee.

**URL Parameters**:
- `employeeId`: Positive integer ID of the employee

**Example Request**:
```bash
GET /api/employees/1
```

**Success Response**:
```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    // ... all employee fields
  },
  "error": null,
  "message": "Employee retrieved successfully",
  "status": 200
}
```

**Error Responses**:
- `400`: Invalid employee ID
- `401`: Unauthorized
- `404`: Employee not found

### Update Employee

**Endpoint**: `PUT /api/employees/[employeeId]`

**Description**: Update an existing employee record.

**URL Parameters**:
- `employeeId`: Positive integer ID of the employee

**Request Body**: Partial employee data (any subset of fields)
```json
{
  "first_name": "Jane",
  "email": "jane.doe@example.com",
  "job": "Senior Software Engineer"
}
```

**Validation**: Same rules as create operation, but all fields are optional.

**Success Response**:
```json
{
  "data": {
    "id": 1,
    "first_name": "Jane",
    "last_name": "Doe",
    // ... all employee fields (updated)
  },
  "error": null,
  "message": "Employee updated successfully",
  "status": 200
}
```

**Error Responses**:
- `400`: Validation errors, bad request, or no fields provided
- `401`: Unauthorized
- `404`: Employee not found
- `409`: Email already exists (if updating email)

### Delete Employee

**Endpoint**: `DELETE /api/employees/[employeeId]`

**Description**: Delete an employee record.

**URL Parameters**:
- `employeeId`: Positive integer ID of the employee

**Example Request**:
```bash
DELETE /api/employees/1
```

**Success Response**:
```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    // ... all employee fields (deleted record)
  },
  "error": null,
  "message": "Employee deleted successfully",
  "status": 200
}
```

**Error Responses**:
- `400`: Invalid employee ID
- `401`: Unauthorized
- `404`: Employee not found

## Error Handling

### Common Error Responses

**400 Bad Request**:
```json
{
  "data": null,
  "error": "Validation failed: First name is required",
  "message": "Error",
  "status": 400
}
```

**401 Unauthorized**:
```json
{
  "data": null,
  "error": "Unauthorized - User not authenticated",
  "message": "Error",
  "status": 401
}
```

**404 Not Found**:
```json
{
  "data": null,
  "error": "Employee not found",
  "message": "Error",
  "status": 404
}
```

**409 Conflict**:
```json
{
  "data": null,
  "error": "Employee with this email already exists",
  "message": "Error",
  "status": 409
}
```

**500 Internal Server Error**:
```json
{
  "data": null,
  "error": "Internal server error",
  "message": "Error",
  "status": 500
}
```

## Client-Side Usage

### Using the API Client

The project includes a custom API client (`/lib/api-client.ts`) and React hooks (`/lib/hooks/use-employees.ts`) for easy consumption:

```typescript
import { useEmployees, useCreateEmployee, useUpdateEmployee, useDeleteEmployee } from '@/lib/hooks/use-employees';

// Fetch employees
const { employees, pagination, isLoading, error } = useEmployees({
  page: 1,
  limit: 10,
  search: 'john',
  gender: 'Male'
});

// Create employee
const { createEmployee, isPending } = useCreateEmployee();
const newEmployee = await createEmployee({
  first_name: 'John',
  last_name: 'Doe',
  // ... other fields
});

// Update employee
const { updateEmployee } = useUpdateEmployee();
const updatedEmployee = await updateEmployee({
  id: 1,
  data: { first_name: 'Jane' }
});

// Delete employee
const { deleteEmployee } = useDeleteEmployee();
await deleteEmployee(1);
```

### Direct API Usage

You can also use the API client directly:

```typescript
import { apiClient } from '@/lib/api-client';

// Get employees
const response = await apiClient.get('/employees', { page: 1, limit: 10 });
console.log(response.data);

// Create employee
const newEmployee = await apiClient.post('/employees', employeeData);

// Update employee
const updatedEmployee = await apiClient.put('/employees/1', updateData);

// Delete employee
await apiClient.delete('/employees/1');
```

## Development Notes

### Mock Data

The current implementation uses mock data stored in `/constants/mock-api.ts`. The data is initialized with 20 sample employees and persists during the application session.

### Future Enhancements

1. **Database Integration**: Replace mock data with actual database (Supabase, PostgreSQL, etc.)
2. **File Upload**: Add support for profile picture uploads
3. **Advanced Filtering**: Add more sophisticated filtering options
4. **Bulk Operations**: Add bulk create/update/delete operations
5. **Export/Import**: Add CSV export/import functionality
6. **Audit Trail**: Add change tracking and audit logs
7. **Rate Limiting**: Implement API rate limiting
8. **Caching**: Add response caching for better performance

### Best Practices

1. **Authentication**: Always ensure proper authentication before processing requests
2. **Validation**: Validate all input data using Zod schemas
3. **Error Handling**: Use standardized error responses with appropriate HTTP status codes
4. **Type Safety**: Use TypeScript throughout for type safety
5. **Consistent Responses**: Follow the standardized response format
6. **Testing**: Add comprehensive tests for all endpoints

## File Structure

```
app/api/employees/
├── route.ts                    # GET /api/employees, POST /api/employees
└── [employeeId]/
    └── route.ts               # GET, PUT, DELETE /api/employees/[id]

lib/
├── api-helpers.ts             # Standardized response utilities
├── api-client.ts              # Client-side API client
├── validations/
│   └── employee.ts            # Zod validation schemas
└── hooks/
    └── use-employees.ts       # React Query hooks

docs/
└── api-routes.md              # This documentation
```

This API structure provides a solid foundation for employee management with proper validation, error handling, and a consistent developer experience.