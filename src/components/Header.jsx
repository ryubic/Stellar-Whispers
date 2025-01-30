import React from 'react'

function Header() {
  return (
    <>
    <div className='sticky top-0 sm:static py-[15px] sm:py-0 sm:h-[80px] box-border px-[7vw] sm:px-[5vw] w-screen bg-black text-white flex justify-between items-center text-xl '>
        <div className='text-3xl sm:text-4xl font-JosefinSans font-bold'>Steller Whispers</div>
        <div className='hidden sm:flex gap-4 sm:text-base font-onest'>
            <button className='border-[1.5px] border-white px-2 py-1 rounded hover:bg-white hover:text-black'>Sign In</button>
            <button className='border-[1.5px] border-white px-2  py-1 rounded hover:bg-white hover:text-black'>Subscribe</button>
        </div>
    </div>
    </>
  )
}
[]
export default Header
