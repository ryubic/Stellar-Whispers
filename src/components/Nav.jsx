import React from 'react'

function Nav() {
    let navItems = ["Market", "Economics", "Industries", "Tech", "Politics", "Businessweek", "Opinion", "More"]
  return (
    
    <nav className='h-[40px] w-screen bg-zinc-900 flex justify-center sticky font-onest'>
        <ul className='w-screen flex md:px-[3vw] md:justify-between sm:justify-evenly  self-center '>
        {navItems.map((item, index)=>{
            return <button key={index} className='text-white hover:bg-zinc-700 px-[1vw] py-2'>{item}</button>
        })}
        </ul>
    </nav>
  )
}

export default Nav
