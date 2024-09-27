import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div>
        <div className='flex my-3 flex-row items-center justify-between'>
            <h1 className='hover:cursor-pointer'><span className='text-3xl font-semibold bg-orange-400 rounded-xl px-2'>TAXI</span><span className='text-3xl text-orange-400 font-semibold'>GO</span></h1>
            <div className='flex hover:cursor-pointer gap-x-16'>
                <h2>Home</h2>
                <h2>History</h2>
                <h2>Help</h2>
            </div>
            <div>
            <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar