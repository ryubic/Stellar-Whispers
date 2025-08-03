import { Link, NavLink } from "react-router-dom";
import useAppContext from "../context/context";
function Nav() {
  const { darkMode, toggleTheme, navVisibility, changeNavVisibility } =
    useAppContext();
  let navItems = ["Articles", "Blogs", "Reports", "Saved"];

  return (
    <nav
      className={`${
        !navVisibility ? "translate-y-[-100vw]" : "translate-y-0"
      } select-none sm:translate-y-0  sm:block fixed sm:sticky sm:top-0 lg:px-[4vw] w-screen justify-center transition-all duration-300 ease-[cubic-bezier(0.42,_0,_0.58,_1)] bg-[#1c1d22] min-w-full py-1 sm:py-0`}
    >
      <ul className="flex flex-col px-[4vw] py-3 sm:p-0 sm:flex sm:flex-row sm:items-center sm:justify-around self-center w-screen">
        {navItems.map((item, index) => {
          return (
            <li className="w-full sm:w-auto" key={index}>
              <NavLink
                onClick={changeNavVisibility}
                to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `h-full sm:w-auto text-right block items-center font-onest font-semibold text-gray-300 text-2xl px-[1vw] ${
                    isActive ?  "underline text-indigo-400" : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          );
        })}
        <li className="flex justify-end sm:items-center">
          <button
            onClick={() => {
              toggleTheme(), changeNavVisibility();
            }}
            className="p-1 rounded w-[45px]"
          >
            {darkMode ? (
              <img className="max-w-[35px]" src="/darkIcon.png" alt="" />
            ) : (
              <img className="max-w-[35px]" src="/lightIcon.png" alt="" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
