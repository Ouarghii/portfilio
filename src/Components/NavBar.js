import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import './navbar.css'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Home',
      href: 'Home'
    },
    {
      id: 2,
      link: 'About',
      href: 'about'
    },
    {
      id: 3,
      link: 'Resume',
      href: 'resume'
    },
    {
      id: 4,
      link: 'Certificats',
      href: 'certificats'
    },
    {
      id: 5,
      link: 'Activities',
      href: 'activities'
    }
  ]
  
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div className='title-container'>
        <h1 className='title text-5xl font-signature ml-2'>
          <span style={{ fontFamily: 'Source Code Pro', fontSize: '20px' }}> {"cout<< " }</span>
          <span style={{ color: 'red' }}>R</span>aslen <span style={{ color: 'red' }}>O</span >uarghi
          <span style={{ fontFamily: 'Source Code Pro', fontSize: '12px' }}> {"<<endl ;"}</span>
        </h1>
      </div>
      <div className='nav1'>
        <ul className='hidden md:flex' style={{ fontFamily: 'Source Code Pro', fontSize: '1.5rem' }}>
          {links.map(({ id, link, href }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <Link to={href} smooth={true} duration={500} spy={true} exact='true'>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500' style={{ fontSize: '2.5rem' }}>
            {links.map(({ id, link, href }) => (
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                <Link to={href} smooth={true} duration={500} spy={true} exact='true'>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default NavBar
