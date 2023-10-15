import React from 'react'

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <p>Logo</p>
        {/* The toggle */}
        <p>Toggle</p>
      </div>
    </header>
  )
}
