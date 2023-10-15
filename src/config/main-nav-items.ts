export interface MainNavItem {
    title: string
    href?: string
}
  
export const mainNavItems: MainNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Profile",
    href: "/profile",
  }
]
