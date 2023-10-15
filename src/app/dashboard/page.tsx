import Revenue from '@/components/dashboard/revenue'
import Sales from '@/components/dashboard/sales'
import Species from '@/components/dashboard/species'
import React from 'react'

export default function Dashboard() {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='text-lg font-bold'>Dashboard</div>
        <Sales />
        <Revenue />
        <Species />
    </section>
  )
}
