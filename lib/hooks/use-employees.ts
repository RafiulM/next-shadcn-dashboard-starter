import { useQuery, useMutation, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { apiClient, ClientApiResponse } from '@/lib/api-client';
import { Employee } from '@/constants/data';

// Types for API responses
interface EmployeesResponse {
  employees: Employee[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

interface EmployeeResponse {
  employee: Employee;
}

interface CreateEmployeeData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number;
  latitude?: number;
  job: string;
  profile_picture?: string;
}

interface UpdateEmployeeData extends Partial<CreateEmployeeData> {}

// Query keys for caching
export const employeeKeys = {
  all: ['employees'] as const,
  lists: () => [...employeeKeys.all, 'list'] as const,
  list: (params: any) => [...employeeKeys.lists(), params] as const,
  details: () => [...employeeKeys.all, 'detail'] as const,
  detail: (id: number) => [...employeeKeys.details(), id] as const,
};

// Hook to fetch employees with pagination and filtering
export function useEmployees(
  params: {
    page?: number;
    limit?: number;
    search?: string;
    gender?: string;
    city?: string;
    country?: string;
    job?: string;
    sort_by?: string;
    sort_order?: string;
  } = {},
  options?: UseQueryOptions<ClientApiResponse<EmployeesResponse>>
) {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: employeeKeys.list(params),
    queryFn: () => apiClient.get<EmployeesResponse>('/employees', params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });

  return {
    employees: data?.data?.employees || [],
    pagination: data?.data?.pagination || {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      hasNext: false,
      hasPrev: false,
    },
    isLoading,
    error,
    refetch,
  };
}

// Hook to fetch a single employee
export function useEmployee(id: number, options?: UseQueryOptions<ClientApiResponse<EmployeeResponse>>) {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: employeeKeys.detail(id),
    queryFn: () => apiClient.get<EmployeeResponse>(`/employees/${id}`),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });

  return {
    employee: data?.data?.employee,
    isLoading,
    error,
    refetch,
  };
}

// Hook to create a new employee
export function useCreateEmployee() {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: CreateEmployeeData) =>
      apiClient.post<EmployeeResponse>('/employees', data),
    onSuccess: () => {
      // Invalidate the employees list to refetch
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
    },
  });

  return {
    createEmployee: mutateAsync,
    isPending,
    error,
  };
}

// Hook to update an employee
export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateEmployeeData }) =>
      apiClient.put<EmployeeResponse>(`/employees/${id}`, data),
    onSuccess: (_, { id }) => {
      // Invalidate both the list and the specific employee
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
      queryClient.invalidateQueries({ queryKey: employeeKeys.detail(id) });
    },
  });

  return {
    updateEmployee: mutateAsync,
    isPending,
    error,
  };
}

// Hook to delete an employee
export function useDeleteEmployee() {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
    error,
  } = useMutation({
    mutationFn: (id: number) =>
      apiClient.delete<EmployeeResponse>(`/employees/${id}`),
    onSuccess: () => {
      // Invalidate the employees list to refetch
      queryClient.invalidateQueries({ queryKey: employeeKeys.lists() });
    },
  });

  return {
    deleteEmployee: mutateAsync,
    isPending,
    error,
  };
}