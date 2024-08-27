"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NewUser() {
    const router = useRouter();

    const handleClick = () =>{
        
        setTimeout(()=>{
            router.push('/dashboard/users');
        }, 5000);

    }

  return (
    <div>
        <h1>New User</h1>
        <button
        className='btn btn-secondary'
        onClick={handleClick}
        >Add New User</button>
    </div>
  )
}
