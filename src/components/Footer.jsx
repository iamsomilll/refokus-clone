import React from 'react'

function Footer() {
  return (
    <div className=' w-full font-[Satoshi]'>
      <div className=' max-w-screen-xl mx-auto flex py-10 gap-40'>
        <div className=' basis-1/2 '>
        <h1 className=' text-[10rem] leading-none tracking-tight font-medium mb-4'>refokus.</h1>
        {["Privacy Policy", "Cookie Policy", "Impressum" , "Terms"].map((elem,index)=><a key={index} className=' mr-8 text-zinc-600 pl-2 text-sm font-medium'>{elem}</a>)}
        </div>
        <div className=' basis-1/2 flex gap-4'>
            <div className=' basis-1/3'>
                <h4 className='mb-6 text-zinc-500 capitalize text-sm'>socials</h4>
                {["instagram","twitter (X?)","LinkedIn"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600 text-sm'>{item}</a>)}
            </div>
            <div className=' basis-1/3'>
                <h4 className='mb-6 text-zinc-500 capitalize text-sm'>sitemap</h4>
                {["home","work","careers","contact"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600 text-sm'>{item}</a>)}
            </div>
            <div className=' basis-1/2 flex flex-col justify-center items-end'>
                <p className=' text-sm font-medium text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <img className=' w-32 mt-6 ' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
