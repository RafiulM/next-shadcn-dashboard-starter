'use client';

import { useQueryState } from 'nuqs';
import { useCallback, useMemo } from 'react';

export const GENDER_OPTIONS = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
  { value: 'Prefer not to say', label: 'Prefer not to say' }
];

export function useEmployeeTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState('q', {
    defaultValue: '',
    shallow: false,
    throttleMs: 1000,
  });

  const [genderFilter, setGenderFilter] = useQueryState('gender', {
    defaultValue: '',
    shallow: false,
  });

  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    shallow: false,
  });

  const [limit, setLimit] = useQueryState('limit', {
    defaultValue: 10,
    shallow: false,
  });

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setGenderFilter(null);
    setPage(1);
  }, [setSearchQuery, setGenderFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!genderFilter;
  }, [searchQuery, genderFilter]);

  const apiParams = useMemo(() => ({
    page,
    limit,
    search: searchQuery || undefined,
    gender: genderFilter || undefined,
  }), [page, limit, searchQuery, genderFilter]);

  return {
    searchQuery,
    setSearchQuery,
    genderFilter,
    setGenderFilter,
    page,
    setPage,
    limit,
    setLimit,
    resetFilters,
    isAnyFilterActive,
    apiParams,
  };
}