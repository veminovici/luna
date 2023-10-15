import Notifications from '@/components/profile/notifications'
import React from 'react'

export default function Profile() {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='text-lg font-bold'>Profile</div>
        <Notifications />
    </section>
  )
}
