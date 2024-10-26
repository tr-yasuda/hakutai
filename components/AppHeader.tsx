'use client'

import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'

export function AppHeader() {
  return (
    <SidebarInset>
      <header className={'flex p-4 justify-between'}>
        <div className={'flex items-center gap-4 px-4'}>
          <SidebarTrigger />
          <Link href="/" className={'flex'}>
            <Image
              src={'/images/icon.webp'}
              alt={'Hakutai'}
              width={18}
              height={18}
              priority
            />
            <span className={'font-bold ml-2'}>Hakutai</span>
          </Link>
        </div>
      </header>
    </SidebarInset>
  )
}
