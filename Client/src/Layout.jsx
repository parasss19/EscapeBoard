import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


import { Outlet } from 'react-router-dom'   //we import outlet component as it is used to render different components dymaically (here we want to render home/about/contact/github etc page b/w header and footer)

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>  
    </>
  )
}
