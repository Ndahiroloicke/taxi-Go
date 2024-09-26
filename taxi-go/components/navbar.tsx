import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
            <h1><span className='text-3xl font-semibold bg-orange-400 rounded-xl px-2'>TAXI</span><span className='text-3xl text-orange-400 font-semibold'>GO</span></h1>
            <div className='flex'>
                <h2>Home</h2>
                <h2>History</h2>
                <h2>Help</h2>
            </div>
        </div>
    </div>
  )
}

export default Navbar