import SignUpViewPage from '@/sections/auth/view/signup-view'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication | Sign Up',
  description: 'Create Account'
}

export default function Page() {
  return <SignUpViewPage />
}
