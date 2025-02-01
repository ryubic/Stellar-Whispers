import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import './index.css'
import Root from './Root'
import { Articles, Blogs, Reports, Saved } from './components'


// Router
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Articles />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='reports' element={<Reports />} />
      <Route path='saved' element={<Saved />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
