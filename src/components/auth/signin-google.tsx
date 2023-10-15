'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa6'
import { buttonVariants } from '@ui/button'

const GoogleSignInButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') as string;

  return (
    <button
      // className='flex gap-2'
      className={buttonVariants({
        size: 'sm',
        className: 'mt-5',
      })}
      onClick={() => signIn('google', { callbackUrl })}
    >
      <FaGoogle className='h-5 w-5 mr-2' />{' '}Continue with Google
    </button>
  )
}

export default GoogleSignInButton