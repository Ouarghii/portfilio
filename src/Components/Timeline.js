import React from 'react'
import './timeline.css'
import img1 from '../assets/cps.jpg'
import img2 from '../assets/supercup.jpg'
import img3 from '../assets/ieee.jpg'
import img4 from '../assets/robotique.jpg'
import img5 from '../assets/chaabola.jpg'
const Timeline = () => {
  return (
    <div name="activities" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black' style={{fontFamily: 'Source Code Pro',height:'120%'}}>
          <div
        
        style={{ fontFamily: "Source Code Pro" }}
      >
        <div style={{height:'100px'}}></div>
        <div className="pb-2" >
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500 text-white"
            style={{ marginLeft: "70px" }}
          >
            {"Activities/> : What I do ? "}
          </p >
        </div>
      </div>
         <div style={{height:'120px'}}></div> 
        <div className='vertical-line' >
        <div className="circle1">
        <div className="line-left">
        <div className='rectangle' style={{ width: '500px', height: '400px', padding: '10px' }}>
              <img src={img1} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className='description'>
    <p style={{color:'white',alignItems:'center',margin:'auto',textAlign:'center',marginTop:'80px',fontSize:'20px',fontWeight:'bold'}}><strong>CPS ENSI</strong></p>
  </div>
              
            </div>
        </div>
        
      </div>
      <div className="circle">
    
        <div className="line-right">
        <div className='rectangle1' style={{ width: '500px', height: '400px', padding: '10px' }}>
              <img src={img2} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className='description'>
    <p style={{color:'white',alignItems:'center',margin:'auto',textAlign:'center',marginTop:'80px',fontSize:'20px'}}>Super Cup with A.R.E </p>
  </div>
            </div>
        </div>
      </div>
      <div className="circle">
        <div className="line-left">
        <div className='rectangle' style={{ width: '500px', height: '400px', padding: '10px' }}>
              <img src={img3} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className='description'>
    <p style={{color:'white',alignItems:'center',margin:'auto',textAlign:'center',marginTop:'80px',fontSize:'20px'}}>Active member in IEEE ENSI</p>
  </div>
            </div>
        </div>
        
      </div>
      <div className="circle">
       
        <div className="line-right">
        <div className='rectangle1' style={{ width: '500px', height: '400px', padding: '10px' }}>
              <img src={img4} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className='description'>
    <p style={{color:'white',alignItems:'center',margin:'auto',textAlign:'center',marginTop:'80px',fontSize:'20px'}}>Active Member with A.R.E</p>
  </div>
            </div>
        </div>
      </div>
      <div className="circlen">
        <div className="line-left">
        <div className='rectangle' style={{ width: '500px', height: '400px', padding: '10px' }}>
              <img src={img5} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className='description'>
    <p style={{color:'white',alignItems:'center',margin:'auto',textAlign:'center',marginTop:'80px',fontSize:'20px'}}>Chaabola Team in EPC2.0 Competition with Mouhamed Mezzi and fedi Kouki</p>
  </div>
            </div>
        </div>
        
      </div>
        </div>
    </div>
        
    
  )
}

export default Timeline