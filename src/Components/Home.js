import React from 'react'
import prof from '../assets/img/prof.jpg'
import {TiArrowRightOutline} from 'react-icons/ti'
import Typical from 'react-typical'
import './home.css'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' style={{fontFamily: 'Source Code Pro',marginTop:'0px'}}>
      <div className=' mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
        <div className='txt flex flex-col justify-center h-full' >
          <h2 className='text-6xl sm:text-7xl font-bold text-white mb-2' style={{marginLeft:'50px'}}>
            I am currently a{' '}
            <span className='ras'>
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  ' software engineering student 💻 ',
                  10000000000000,
                ]}
              />
            </span>
          </h2>
          <p className='max-w-screen-lg text-gray-500 py-4 max-w-md text-lg ' style={{fontSize:'25px',marginBottom:'10px',lineHeight: '1.5',marginLeft:'80px',marginTop:'70px'}}>
            <span style={{color:"yellow"}}>{"<p>"}</span>
            I have always been passionate about technology and its ability to make people's lives easier. As a software engineering student, I have been able to turn that passion into a career path, where I can use my skills to create innovative and impactful software solutions. On this website, you'll find examples of my work and learn more about my experience and skills. I'm excited to share my journey with you and look forward to connecting with you soon!{' '}
            <span style={{color:"yellow"}}>{"</p>"}</span>
          </p>
          <div>
            <button className='group text-white w-fit px-2 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio{' '}
              <span className='group-hover:rotate-90 duration-300'>
                <TiArrowRightOutline size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={prof} alt='my profile' className='image rounded-2xl mx-auto w-2/3 md:w-full mt-4 md:mt-0' style={{width: '80%',marginLeft:'40px'}}  />
        </div>
      </div>
    </div>
  )
}

export default Home