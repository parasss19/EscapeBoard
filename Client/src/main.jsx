import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'     //RouterProvider component use router prop.... and To create router we import one method "createBrowserRouter" which take array of objects as parameter

import Layout from './Layout'
import HomePage from '../src/Components/HomePage'
import Forms from "../src/Components/Forms";
import RoomPage from '../src/Components/RoomPage'


//creating router
const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,

    //Now our routes for diff pages
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "room",
        element: <Forms />
      },
      {
        path: "",
        element: <RoomPage />
      },
      
      // {
      //   path: "contact",
      //   element: <Contact />
      // },
      // {
      //   path:"user/:userid",     //here we want to show the params from the url and showed them in our website dynamically 
      //   element: <User />
      // },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)

