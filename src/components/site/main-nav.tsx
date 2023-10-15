'use client'

import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import Logo from './logo'
// import MainNavElement from './main-nav-element'
// import { mainNavItems } from '@config/main-nav-items'

export default function MainNavContainer() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Logo />
      {/* <nav className="flex items-center space-x-6 text-sm font-medium">
        {
          mainNavItems?.length ? (
            mainNavItems?.map((item, index) => item.href && (
              <Fragment key={index}>
                <MainNavElement active={pathname === item.href} item={item} />
              </Fragment>
            ))
          ) : null
        }
      </nav> */}
    </div>
  )
}
