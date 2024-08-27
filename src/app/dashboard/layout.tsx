import HeaderNav from '@/components/HeaderNav'
import React,{ ReactNode} from 'react'

export default function DashboardLayout({children} : { children: ReactNode}) {
  return (
    <div>
        <header className='bg-black p-5 text-white'>
            <HeaderNav/>
        </header>
        {children}
    </div>
  )
}
