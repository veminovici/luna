'use client'

import React from 'react'
import { Button, buttonVariants } from '@ui/button'
import { signIn } from 'next-auth/react'
import { FaRegUser } from 'react-icons/fa6';

export default function UserUnauthenticated() {
  return (
    <Button 
      variant="outline"
      onClick={() => signIn()}
      className={buttonVariants({
          size: 'sm',
          className: 'mx-2 h-9 w-9 rounded-full ring-1',
      })}
    >
      <FaRegUser/>
    </Button>
  )
}
