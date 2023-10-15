import { getServerSession } from 'next-auth/next'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function About() {
  const session = await getServerSession(authOptions)

  return (
    // <div>About: {session?.user?.name}</div>
    <div>About</div>
  )
}
