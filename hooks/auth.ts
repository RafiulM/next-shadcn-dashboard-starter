'use client'

import { createClient } from '@/lib/supabase/client'
import { useMutation } from '@tanstack/react-query'

interface SignIn {
  email: string
  password: string
}

export function useSignIn() {
  const supabase = createClient()

  return useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (payload: SignIn) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        ...payload
      })

      if (error) {
        throw error
      }

      return data
    }
  })
}

interface SignUp {
  email: string
  password: string
  name: string
}

export function useSignUp() {
  const supabase = createClient()

  return useMutation({
    mutationKey: ['signUp'],
    mutationFn: async (payload: SignUp) => {
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          data: {
            name: payload.name
          }
        }
      })

      if (error) {
        throw error
      }

      return data
    }
  })
}
