import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className='min-w-40 text-black bg-zinc-100 px-4 py-2 rounded-full flex items-center justify-between'>
      <span className='text-sm font-medium'>Start a Project</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button