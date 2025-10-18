import { NextResponse } from 'next/server';

// Standard API response type
export interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
  message?: string;
  status: number;
}

// Success response helper
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      data,
      error: null,
      message: message || 'Success',
      status,
    },
    { status }
  );
}

// Error response helper
export function createErrorResponse(
  error: string,
  status: number = 500,
  message?: string
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      data: null,
      error,
      message: message || 'Error',
      status,
    },
    { status }
  );
}

// Common error type helpers
export const ApiError = {
  badRequest: (message: string = 'Bad request') =>
    createErrorResponse(message, 400),
  unauthorized: (message: string = 'Unauthorized') =>
    createErrorResponse(message, 401),
  forbidden: (message: string = 'Forbidden') =>
    createErrorResponse(message, 403),
  notFound: (message: string = 'Resource not found') =>
    createErrorResponse(message, 404),
  conflict: (message: string = 'Conflict') =>
    createErrorResponse(message, 409),
  validation: (errors: string | string[] = 'Validation failed') => {
    const errorMessage = Array.isArray(errors) ? errors.join(', ') : errors;
    return createErrorResponse(errorMessage, 400);
  },
  serverError: (message: string = 'Internal server error') =>
    createErrorResponse(message, 500),
};

// Validation error helper for Zod errors
export function createValidationError(zodError: any): NextResponse<ApiResponse> {
  const errors = zodError.errors?.map((err: any) => err.message) || ['Validation failed'];
  return ApiError.validation(errors);
}

// Async route wrapper to catch errors
export function withErrorHandler(
  handler: (request: Request, ...args: any[]) => Promise<NextResponse>
) {
  return async (request: Request, ...args: any[]): Promise<NextResponse> => {
    try {
      return await handler(request, ...args);
    } catch (error) {
      console.error('API Error:', error);
      
      if (error instanceof Error) {
        // Check for common error patterns
        if (error.message.includes('Validation')) {
          return ApiError.validation(error.message);
        }
        if (error.message.includes('Unauthorized') || error.message.includes('Authentication')) {
          return ApiError.unauthorized(error.message);
        }
        if (error.message.includes('Not found') || error.message.includes('does not exist')) {
          return ApiError.notFound(error.message);
        }
        if (error.message.includes('Forbidden') || error.message.includes('permission')) {
          return ApiError.forbidden(error.message);
        }
        
        return createErrorResponse(error.message, 500);
      }
      
      return ApiError.serverError();
    }
  };
}