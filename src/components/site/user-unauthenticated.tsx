'use client'

import React from 'react'
import { Button, buttonVariants } from '@ui/button'
import { signIn } from 'next-auth/react'
import { FaUser } from 'react-icons/fa6';

export default function UserUnauthenticated() {
  return (
    <Button 
      variant="outline"
      onClick={() => signIn()}
      className={buttonVariants({
          size: 'sm',
          className: 'mx-2 rounded-full ring-1',
      })}
      size="icon"
    >
      <FaUser className='h-16'/>
    </Button>
  )
}
