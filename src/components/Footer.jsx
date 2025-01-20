import React from 'react'

function Footer() {
    let partition =["Home", "News", "Work & Life", "Market Data", "Explore"]
  return (
    <>
     <div className='min-h-44 w-screen bg-zinc-900 text-white self-center text-xl'>
        <div className='h-[60px] text-4xl flex px-5 items-center
        '>Newscend</div>
        <div className='h-[250px] border-[1px] border-white/20 text-4xl flex'>
            {partition.map((e,index)=> <div key={index} className='h-full w-[15%] text-base py-4 border-x-[1px] border-white/20'>{e}</div>)}
        </div>
        <div className='h-[70px] border-[1px] border-white/20 flex px-5 items-center
        '> Copyright Details </div>
    </div>
    </>
  )
}

export default Footer

