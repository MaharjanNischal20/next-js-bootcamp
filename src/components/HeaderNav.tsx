import Link from 'next/link'
import React from 'react'

export default function HeaderNav() {
  return (
    <div>
        <nav>
            <ul className='flex gap-[30px]'>
                <li>
                    <Link href="/dashboard/products" className='font-bold uppercase text-lg hover:text-red-600 transition-all ease-linear'>Products</Link>
                </li>
                <li>
                    <Link href="/dashboard/users" className='font-bold uppercase text-lg hover:text-red-600 transition-all ease-linear'>Users</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
