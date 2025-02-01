import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-screen bg-[#1c1d22] text-white self-center '>
        <div className='py-5 text-4xl flex px-5 items-center font-onest font-bold cursor-default select-none
        '>Stellar Whispers</div>
        <div className='py-5 font-onest text-xl border border-white/20 px-5 items-center
        '> Credits:
          <p className='text-base'>
            <span>This website uses data from </span>
            <a className='text-indigo-400' href="https://www.spaceflightnewsapi.net" target="_blank" rel="noopener noreferrer">
            Spaceflight News API
            </a>
            <span> to provide up-to-date space-related news. Additionally, the light and dark mode icons are sourced from </span>
            <a className='text-indigo-400' href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
              Flaticon.
            </a><span> A huge thanks to these platforms for their valuable resources!</span>
          </p>


        </div>
      </div>
    </>
  )
}

export default Footer

