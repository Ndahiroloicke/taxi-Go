import React from 'react'
import Autocomplete from './autocomplete'

const Booking = () => {
  return (
    <div>
        <h2 className='text-[16px] flex justify-center font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 m-9 rounded-md'>
        <Autocomplete/>
        </div>
    </div>
  )
}

export default Booking