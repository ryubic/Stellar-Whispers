import { useEffect, useState } from 'react'
import { Header, Nav } from './components'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from './context/context'
import fetchData from './backend'

export default function Root() {

  // States
  const [articlesResponse, setArticlesResponse] = useState(null)
  const [blogsResponse, setBlogsResponse] = useState(null)
  const [reportsResponse, setReportsResponse] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  // APIs
  const articlesApi = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=30'
  const blogsApi = 'https://api.spaceflightnewsapi.net/v4/blogs/?limit=25'
  const reportsApi = 'https://api.spaceflightnewsapi.net/v4/reports/?limit=20'

  // Function to change theme
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // Fetch data on mount
  useEffect(() => {
    fetchData(articlesApi, setArticlesResponse)
    fetchData(blogsApi, setBlogsResponse)
    fetchData(reportsApi, setReportsResponse)
  }, [])

  if (articlesResponse && blogsResponse && reportsResponse) {
    return (
      <>
        <AppContextProvider value={{ darkMode, articlesResponse, blogsResponse, reportsResponse, setArticlesResponse, setBlogsResponse, setReportsResponse, toggleTheme }}>
          <Header />
          <Nav />
          <Outlet />
          <Footer />
        </AppContextProvider>
      </>
    )
  }
  else {
    return <div className='h-[70vh] w-full text-2xl font-serif flex justify-center items-center'>Fetching data...</div>
  }
}
