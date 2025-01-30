import { Link, NavLink } from 'react-router-dom'

function Nav() {

  let navItems = ["Articles", "Blogs", "Reports", "Saved"]

  return (
    <nav className='sticky top-0 hidden sm:flex sm:h-[40px] w-screen bg-black justify-center'>
      <ul className='h-full w-screen flex sm:px-[7vw] sm:justify-between self-center'>
        {navItems.map((item, index) => {
          return (
            <li className='flex items-center' key={index}>
              <NavLink
                to={index === 0 ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `h-full flex items-center font-bold text-xl px-[1vw] ${isActive ? "text-orange-500" : "text-white"}`
                }
              >
                {item}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav