// import { MainNavItem } from '@config/main-nav-items'
import { MainNavItem } from '@config/main-nav-items';
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'

interface MainNavElementProps {
  active: boolean,
  item: MainNavItem
}

export default function MainNavElement({active, item}: MainNavElementProps) {
  const href = item.href ?? "/";
  return (
      <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80",
        active ? "text-foreground" : "text-foreground/60"
      )}
    >
      {item.title}
    </Link>
  )
}
