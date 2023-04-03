import React from 'react'
import './social.css'
import {FaGithub,FaFacebook,FaInstagram,FaLinkedin}from'react-icons/fa'
const Social = () => {
    const links=[
        {id:1,
        child:(
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
        ),href:'https://www.linkedin.com/in/raslen-ouarghi-9a464a240/',
        style:'rounded-tr-md'
       },{id:2,
        child:(
            <>
              Github <FaGithub size={30} />
            </>
        ),href:'https://github.com/Ouarghii',
        
       },{id:3,
        child:(
            <>
              Facebook <FaFacebook size={30} />
            </>
        ),href:'https://www.facebook.com/raslen.friendlyboy.3/',
       
       },{id:4,
        child:(
            <>
              Instagram <FaInstagram size={30} />
            </>
        ),href:'https://www.instagram.com/raaslenn/',
        style:'rounded-tr-md'
       }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-[-1%] fixed'>
        <ul>
            
                <li  className={"flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + 'rounded-tr-md' }>
                <a href='https://www.linkedin.com/in/raslen-ouarghi-9a464a240/' className='flex justify-between items-center w-full text-white' style={{textDecoration:"none",fontFamily:'Poppins, sans-serif',fontSize:'20px'}}>
                    <><FaLinkedin className='icon11' style={{marginLeft:'80px'}} size={30}/>
                    </>
                </a>
                </li>
                <li  className={"flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " "  }>
                <a href='https://www.facebook.com/raslen.friendlyboy.3/' className='flex justify-between items-center w-full text-white' style={{textDecoration:"none",fontFamily:'Poppins, sans-serif',fontSize:'20px'}}>
                    <> <FaFacebook className='icon11'  style={{marginLeft:'80px'}} size={30}/>
                    </>
                </a>
                </li>
                <li  className={"flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " "  }>
                <a href='https://github.com/Ouarghii' className='flex justify-between items-center w-full text-white' style={{textDecoration:"none",fontFamily:'Poppins, sans-serif',fontSize:'20px'}}>
                    <><FaGithub className='icon11' style={{marginLeft:'80px'}} size={30}/>
                    </>
                </a>
                </li>
                <li  className={"flex justify-between items-center w-40 h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " "  }>
                <a href='https://www.instagram.com/raaslenn/' className='flex justify-between items-center w-full text-white' style={{textDecoration:"none",fontFamily:'Poppins, sans-serif',fontSize:'20px'}}>
                    <><FaInstagram className='icon11' style={{marginLeft:'80px'}} size={30}/>
                    </>
                </a>
                </li>
            
            
           
        </ul>
    </div>
  )
}

export default Social