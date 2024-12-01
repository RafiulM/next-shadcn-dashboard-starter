'use client'
import React from 'react'
import TanstackQueryProvider from '../providers/tanstack-query-provider'
import ThemeProvider from './ThemeToggle/theme-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </>
  )
}
