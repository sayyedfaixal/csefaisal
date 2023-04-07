import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const links = [
        {
            id:1,
            linkText :"Home"
        },
        {
            id:2,
            linkText :"About"
        },
        {
            id:3,
            linkText :"Experience"
        },
        {
            id:4,
            linkText :"Projects"
        },
        // {
        //     id:5,
        //     linkText : "Contact"
        // }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
        <div className='text-5xl font-signature ml-2'>
            Faisal
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, linkText}) =>(
                <li
                key={id}
                className='decoration-pink-500 no-underline hover:underline px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={linkText} smooth duration={500}>{linkText}</Link>
                </li>
            ))}
        </ul>

        {/* This is for the hamburger part for the mobile visibilty */}
        <div onClick={() =>setNavState(!navState)}  className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {navState ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {navState &&
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map(({id, linkText}) =>(
                <li
                key={id}
                className='px-4 cursor-pointer py-6 text-4xl'>
                <Link
                onClick={() => setNavState(!navState)}
                to={linkText}
                smooth
                duration={500}
              >
                {linkText}
              </Link>
                </li>
            ))}
        </ul>
        }

    </div>
  )
}

export default Navbar;