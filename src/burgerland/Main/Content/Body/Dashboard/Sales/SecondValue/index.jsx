import React from 'react'
import { PiShoppingBagFill } from "react-icons/pi";


const SecondValue = () => {
  return (
    <div className='flex h-full w-full justify-center items-center'>
        <div className='p-2 bg-green-50 rounded-md'>
        <PiShoppingBagFill  size={20}/>
        </div>
        <div className='flex flex-col items-start justify-center ml-1'>
            <span className='leading-6 text-xl  font-medium'>244</span>
            <span className='leading-3 text-sm font-light'>delivered</span>
        </div>
    </div>
  )
}

export default SecondValue