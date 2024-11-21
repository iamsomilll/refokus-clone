import React from 'react'

function Stripe({val}) {
  return (
    <div className='min-w-[20%] h-16 px-4 py-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] last:border-r-0 border-zinc-600 flex items-center justify-between'>
      <img className=' w-30' src={val.url} alt="" />
      <span className='font-[Satoshi] font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
