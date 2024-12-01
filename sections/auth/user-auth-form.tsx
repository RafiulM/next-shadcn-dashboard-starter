'use client'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type UserAuthFormProps<T extends FieldValues> = {
  onSubmit: (data: T) => void
  isLoading?: boolean
  form: UseFormReturn<T, any, undefined>
  children?: React.ReactNode
}

export default function UserAuthForm<T extends FieldValues>({
  onSubmit,
  isLoading,
  form,
  children
}: UserAuthFormProps<T>) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          {children}
          <Button disabled={isLoading} className="ml-auto w-full" type="submit">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            Continue
          </Button>
        </form>
      </Form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <GithubSignInButton /> */}
    </>
  )
}
