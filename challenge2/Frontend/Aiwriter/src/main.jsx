import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Mainlayout from './Layouts/Mainlayout.jsx'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Gemini from './Pages/Gemini.jsx'
import UploadImage from './Pages/UploadImage.jsx'
import Voice from './Pages/Voice.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/about",
        element: <Aboutus />
      },
      {
        path: "/gemini",
        element: <Gemini />
      },
      {
        path: "/uploadimage",
        element: <UploadImage></UploadImage>
      },
      {
        path: "/voice",
        element: <Voice></Voice>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
<div className=''>
<StrictMode>
    
    <RouterProvider router={router}>
     
    </RouterProvider>
  </StrictMode>
</div>
)
