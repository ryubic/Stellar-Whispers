import React from 'react'

function Header() {
  return (
    <>
    <div className='h-[80px] box-border px-[4vw] w-screen bg-black text-white flex justify-between items-center text-xl'>
        <div className='text-4xl font-pacifico'>Newscend</div>
        <div className='flex gap-5 text-base font-onest'>
            <button className='border-[1.5px] border-white px-2 py-1 rounded hover:bg-white hover:text-black'>Sign In</button>
            <button className='border-[1.5px] border-white px-2  py-1 rounded hover:bg-white hover:text-black'>Subscribe</button>
        </div>
    </div>
    </>
  )
}
[]
export default Header
