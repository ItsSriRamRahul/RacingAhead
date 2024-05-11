import React from 'react'
import Cards from './Cards'

function SlideBar({ props }) {
  return (
    <div className='flex flex-col my-5'>
      <div className='border-b-4 border-gray-500 '>
        <h1 className=''>
          {props.title}
        </h1>
      </div>
      <div className='my-3 flex flex-row'>
       <Cards/> <Cards/>
      </div>
    </div>
  )
}

export default SlideBar