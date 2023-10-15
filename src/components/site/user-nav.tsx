'use client'

import { useSession } from 'next-auth/react'
import { UserAuthenticated } from './user-authenticated'
import UserUnauthenticated from './user-unauthenticated'

export default function UserNav() {
  const { data: session } = useSession()

  return (
    <>
    {
        session ? (
            // <UserDropmenu />
            <UserAuthenticated />
        ) : (
            <UserUnauthenticated />
        )
    }
    </>
  )
}
