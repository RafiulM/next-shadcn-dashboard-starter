import { EmployeeListingPageClient } from '@/sections/employee/views/employee-listing-page-client';
import { SearchParams } from 'nuqs/parsers';
import React from 'react';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Employees'
};

export default async function Page({ searchParams }: pageProps) {
  return <EmployeeListingPageClient searchParams={searchParams} />;
}
