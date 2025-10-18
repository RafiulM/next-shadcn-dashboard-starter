import { ApiResponse } from '@/lib/api-helpers';

// Client-side API response type
export interface ClientApiResponse<T = any> {
  data: T | null;
  error: string | null;
  message?: string;
  status: number;
}

// Base API client for making requests to our API endpoints
class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = '/api';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ClientApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      return {
        data: data.data,
        error: data.error,
        message: data.message,
        status: response.status,
      };
    } catch (error) {
      console.error('API request error:', error);
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Network error',
        status: 500,
      };
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ClientApiResponse<T>> {
    let url = endpoint;
    
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      const queryString = searchParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    return this.request<T>(url, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<ClientApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<ClientApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ClientApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();