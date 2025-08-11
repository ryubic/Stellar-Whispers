import React from 'react'
import useAppContext from '../context/context'

function signIn() {
  alert("coming soon...")
}

function Header() {
  const { navVisibility, changeNavVisibility } = useAppContext()
  return (
    <>
      <div className='py-[10px] z-10 sm:py-0 sm:h-[80px] box-border px-[7vw] sm:px-[5vw] w-screen bg-[#1c1d22] text-gray-300 sticky top-0 sm:static flex justify-between items-center text-xl select-none'>
        <h1 className='text-[#8080ff] text-3xl sm:text-4xl font-onest font-bold cursor-default'>Stellar Whispers</h1>
        <div className='flex gap-4 sm:text-base font-onest'>
          <button
            onClick={signIn}
            className='hidden sm:block border-[1.5px] border-white px-2 py-1 rounded hover:bg-white hover:text-black'>Sign In
          </button>
          <button
            onClick={changeNavVisibility}
            className='sm:hidden flex flex-col gap-1 justify-center cursor-pointer'>
            <span className={`w-8 border-b-4 border-[#8080ff] transition-all duration-300 ${navVisibility ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-8 border-b-4 border-gray-300 transition-all duration-100 ${navVisibility ? "opacity-0" : ""}`}></span>
            <span className={`w-8 border-b-4 border-gray-300 transition-all duration-300 ${navVisibility ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Header
