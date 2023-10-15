import { Icons } from "@components/icons"

export interface SocialNavItem {
  title: string
  href?: string
  icon?: keyof typeof Icons
}

export const socialNavItems:  SocialNavItem[] = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/vlad.eminovici/",
    icon: "facebook",
  },
  {
    title: "GitHub",
    href: "https://github.com/veminovici",
    icon: "github",
  },
]