import React from 'react'
import { ThemeToggle } from './theme-toggle'

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <p>Logo</p>
        {/* The right navigation */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {/* The icons to social */}
            {/* <SocialNavContainer /> */}
            {/* Mood toggle */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}