import type { Metadata } from 'next'
import './globals.css'
import { AppHeader } from '@/components/AppHeader'
import { AppSidebar } from '@/components/AppSidebar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SidebarProvider } from '@/components/ui/sidebar'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Hakutai',
  description:
    'Building a platform for creators to upload and share content generated using AI. ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main>
              <AppHeader />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
