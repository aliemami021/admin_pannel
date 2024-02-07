import React from 'react'
import { PiHamburger } from "react-icons/pi";


const ThirdValue = () => {
    return (
        <div className='flex h-full w-full justify-center items-center '>
            <div className='p-2 bg-red-50 rounded-md'>
            <PiHamburger  size={20}/>
            </div>
            <div className='flex flex-col items-start justify-center ml-1'>
                <span className='leading-6 text-xl  font-medium'>244</span>
                <span className='leading-3 text-sm font-light'>orders in total</span>
            </div>
        </div>
      )
}

export default ThirdValue