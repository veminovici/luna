import { Icons } from '@components/icons'
import { siteConfig } from '@lib/site-config'
import Link from 'next/link'
import React from 'react'

export default function MainNavLogoElement() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
    <Icons.logo className="h-6 w-6" />
    <span className="hidden font-bold sm:inline-block text-lg">
      {siteConfig.name}
    </span>
    </Link>
  )
}
