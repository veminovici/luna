import Revenue from '@/components/dashboard/revenue'
import Sales from '@/components/dashboard/sales'
import Species from '@/components/dashboard/species'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect('/signin?callbackUrl=/dashboard')
  }
  
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='text-lg font-bold'>Dashboard (Protected)</div>
        <Sales />
        <Revenue />
        <Species />
    </section>
  )
}
