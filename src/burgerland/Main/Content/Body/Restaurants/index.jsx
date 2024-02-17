import React from 'react'
import Card from "./Card"
import Map from '../../../SideData/Map'

const Restaurant = () => {
  return (
    <div className='flex gap-5'>
      <div className='flex flex-col w-[calc(60%-.6rem)] bg-red-300'>
        <Card/>
      </div>
      {/* ---------------------------------------------map> */}
      <Map/>
    </div>
  )
}

export default Restaurant