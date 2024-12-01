'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'

const signUpformSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string(),
  name: z.string()
})

export type SignUpFormValue = z.infer<typeof signUpformSchema>

export function useSignUpForm() {
  return useForm<SignUpFormValue>({
    resolver: zodResolver(signUpformSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  })
}

export function SignUpForm() {
  const form = useFormContext()
  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="**********" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="name" placeholder="Enter your name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export function SignInForm() {
  const form = useFormContext()
  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="**********" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const signInformSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string()
})

export type SignInFormValue = z.infer<typeof signUpformSchema>

export function useSignInForm() {
  return useForm<SignInFormValue>({
    resolver: zodResolver(signInformSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
