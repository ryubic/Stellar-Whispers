import { useEffect, useState } from 'react'
import { Header, Nav, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from './context/context'
import fetchData from './backend'

// APIs
const articlesApi = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=22'
const blogsApi = 'https://api.spaceflightnewsapi.net/v4/blogs/?limit=22'
const reportsApi = 'https://api.spaceflightnewsapi.net/v4/reports/?limit=22'

export default function Root() {

  // States
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  })
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [navVisibility, setNavVisibility] = useState(false)

  const [articlesResponse, setArticlesResponse] = useState({})
  const [articlesArray, setArticlesArray] = useState([])

  const [blogsResponse, setBlogsResponse] = useState({})
  const [blogsArray, setBlogsArray] = useState([])

  const [reportsResponse, setReportsResponse] = useState({})
  const [reportsArray, setReportsArray] = useState([])


  // Check if user is on small screen
  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768)
  }, [window.innerWidth])


  // Hamburger nav bar visibility for small defices
  const changeNavVisibility = () => {
    setNavVisibility(!navVisibility)
  }


  // Function to change theme mode
  const toggleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode)) // Store theme mode value (after change) in local storage
    setDarkMode(!darkMode)
  }


  // Change Theme (Light Mode/Dark Mode)
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    if (darkMode) {
      document.querySelector('html').classList.add("dark")
    } else {
      document.querySelector('html').classList.add("light")
    }
  }, [darkMode])


  // Fetch data when the website loads for the first time.
  useEffect(() => {
    fetchData(articlesApi, setArticlesResponse)
    fetchData(blogsApi, setBlogsResponse)
    fetchData(reportsApi, setReportsResponse)
  }, [])


  // Update arrays on the change of responses (objects) {mainly for pagination}
  useEffect(() => {
    if (articlesResponse?.results?.length) {
      setArticlesArray((prev) => (Array.isArray(prev) ? [...prev, ...articlesResponse.results] : articlesResponse.results));
    }
  }, [articlesResponse]);

  useEffect(() => {
    if (blogsResponse?.results?.length) {
      setBlogsArray((prev) => (Array.isArray(prev) ? [...prev, ...blogsResponse.results] : blogsResponse.results));
    }
  }, [blogsResponse]);

  useEffect(() => {
    if (reportsResponse?.results?.length) {
      setReportsArray((prev) => (Array.isArray(prev) ? [...prev, ...reportsResponse.results] : reportsResponse.results));
    }
  }, [reportsResponse]);

  // Render Component UI
  if (Object.keys(articlesResponse).length > 0) {
    return (
      <>
        <AppContextProvider value={{ isSmallScreen, darkMode, toggleTheme, articlesResponse, articlesArray, setArticlesResponse, setArticlesArray, blogsResponse, blogsArray, setBlogsResponse, setBlogsArray, reportsResponse, reportsArray, setReportsResponse, setReportsArray, navVisibility, changeNavVisibility }}>
          <Header />
          <Nav />
          <div className='w-screen bg-gray-300 text-black dark:bg-[#1c1d22] dark:text-white transition-all duration-300 ease-[cubic-bezier(0.42,_0,_0.58,_1)]'>
            <Outlet />
          </div>
          <Footer />
        </AppContextProvider>
      </>
    )
  }
  else {
    return <div className='h-[100vh] w-full text-2xl font-serif flex justify-center items-center  bg-gray-300 text-black dark:bg-[#1c1d22] dark:text-white'>Fetching data...</div>
  }
}
