import React from 'react'
import { Link, NavLink } from 'react-router-dom'         //Link is used as alternate of "a" tag but here is one benefit with Link that is it does not reload the page as "a" tag reload the whole page so its better to use Link ....Navlink is also similar but with more functionality of adding class inside callback

export default function Navbar() {
  return (

    <header className="shadow sticky z-50 top-0">
    
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            {/* we use "to"  instead of "href" */}
            <Link 
                to="/" 
                className="flex items-center">
                <span className='font-mono font-semibold text-xl uppercase text-white bg-black/80 p-2 rounded-md'>EscapeBoard</span>
            </Link>

            <div className="flex items-center lg:order-2">
                <Link to="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" >
                    Log in
                </Link>
                <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" >
                    Get started
                </Link>
            </div>

            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2" >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        {/* Here we pass classes inside callback so that we get isActive variable which is very useful(like agar hum home par h toh uss link ka color red ho) */}
                        <NavLink 
                            to="/"
                            className= {({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>  

                    <li>
                        <NavLink 
                            to="/about"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink>
                    </li>  

                    <li>
                        <NavLink 
                            to="/room"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Room
                        </NavLink>
                    </li>  

                    {/* <li>
                        <NavLink 
                            to=""
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>   */}
                           
                </ul>
            </div>

        </div>
    </nav>
</header>
  )
}
