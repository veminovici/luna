import Notifications from '@/components/profile/notifications'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect('/signin?callbackUrl=/dashboard')
  }

  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='text-lg font-bold'>Profile</div>
        <Notifications />
    </section>
  )
}
