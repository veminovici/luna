import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@ui/button'
import { cn } from '@lib/utils'
import { SocialNavItem } from '@config/social-nav-items'
import { Icons, NO_ICON } from '../icons'

interface SocialNavElementProps {
  item?: SocialNavItem
}

export default function SocialNavElement({item}: SocialNavElementProps) {
  // Get the reference
  let href = item?.href ?? "/";

  // Get the icon element
  const icon = Icons[item?.icon ?? NO_ICON];
  const element = icon({className: "h-5 w-5"}) ?? null;

  return (
    <Link
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <span
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-9 px-0"
      )}
    >
      {element}
      <span className="sr-only">{item?.title}</span>
    </span>
  </Link>
)
}
