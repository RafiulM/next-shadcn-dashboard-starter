'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/ui/table/data-table-search';
import { Employee } from '@/constants/data';
import { columns } from '../employee-tables/columns';
import {
  GENDER_OPTIONS,
  useEmployeeTableFilters as useEmployeeTableFiltersAPI
} from './use-employee-table-filters-api';
import { useEmployees } from '@/lib/hooks/use-employees';

export default function EmployeeTable() {
  const {
    genderFilter,
    setGenderFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
    apiParams
  } = useEmployeeTableFiltersAPI();

  // Fetch employees using the API-aware filters
  const {
    employees,
    pagination,
    isLoading,
    error,
  } = useEmployees(apiParams);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="gender"
          title="Gender"
          options={GENDER_OPTIONS}
          setFilterValue={setGenderFilter}
          filterValue={genderFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable 
        columns={columns} 
        data={employees} 
        totalItems={pagination.total}
      />
    </div>
  );
}
