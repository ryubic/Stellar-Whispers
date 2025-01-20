import { useEffect, useState } from 'react'
import fetchData from './backend/index'
import { Header, Nav } from './components'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from './context/context'

export default function Root() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const togleTheme =()=>{
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    fetchData(setData)
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <AppContextProvider value={{data, darkMode, togleTheme}}>
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </AppContextProvider>
    </>
  )
}
