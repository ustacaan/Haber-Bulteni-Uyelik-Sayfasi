import React from 'react'
import ReactDOM from 'react-dom/client'
import './router.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Base from './layouts/Base'


const router = createBrowserRouter([
  {
    path: "/",                 
    element: <Base />,
    // errorElement: <NotFound />,
    
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
)
