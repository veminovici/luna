import React from 'react'
import { ThemeToggle } from './theme-toggle'
import MainNav from './main-nav'
import { UserAuthenticated } from './user-authenticated'
import UserUnauthenticated from './user-unauthenticated'
import UserNav from './user-nav'

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        {/* Main navigation */}
        <MainNav />
        {/* The right navigation */}
        <div className="flex flex-1 gap-4 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center justify-center w-[300px]">
            <UserNav />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
