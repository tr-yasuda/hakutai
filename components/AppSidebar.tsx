'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import {
  House,
  type LucideProps,
  Moon,
  Palette,
  Search,
  Sun,
  SunMoon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

const items = [
  {
    title: 'Home',
    href: '/',
    icon: House,
  },
  {
    title: 'Search',
    href: '/search',
    icon: Search,
  },
]

const themes: {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  setTheme: 'system' | 'dark' | 'light'
  title: string
}[] = [
  { title: 'System', icon: SunMoon, setTheme: 'system' },
  { title: 'Dark', icon: Moon, setTheme: 'dark' },
  { title: 'Light', icon: Sun, setTheme: 'light' },
]

export function AppSidebar() {
  const { setTheme } = useTheme()

  const handleThemeChange = (theme: 'system' | 'dark' | 'light') => {
    setTheme(theme)
  }

  return (
    <Sidebar side={'left'}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Theme selection */}
          <Collapsible asChild>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={'Theme'}>
                  <Palette />
                  <span>Theme</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {themes.map((theme) => (
                    <SidebarMenuSubItem key={theme.title}>
                      <SidebarMenuSubButton
                        asChild
                        onClick={() => {
                          handleThemeChange(theme.setTheme)
                        }}
                      >
                        <div>
                          <theme.icon />
                          <span>{theme.title}</span>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
