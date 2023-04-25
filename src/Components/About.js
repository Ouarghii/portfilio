import React from 'react'
import './about.css'
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaNodeJs,FaPython,FaBootstrap, FaAngular,FaGithubSquare, FaNpm } from 'react-icons/fa';
import {TbBrandCpp, TbBrandVscode} from 'react-icons/tb'
import {SiAnaconda, SiClion, SiJupyter, SiMongodb} from 'react-icons/si'
import {SiAdobephotoshop,SiExpress} from 'react-icons/si'
import {DiEclipse, DiJava} from 'react-icons/di'

const About = () => {
  return (
    <div  name="about" className='txt w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        {/* <p><span style={{color:'blue'}}>class </span> <span style={{color:"yellow"}}>{"Raslen Warghui { "} </span></p> */}
        <div className='hhh p-4 mx-auto flex flex-col justify-center w-full h-full  border-gray-500 bg-gradient-to-b from-gray-800 to-black' style={{fontFamily: 'Source Code Pro'}}>
            <div className='pb-8' style={{marginTop:'170px'}}>
                <p className='text-4xl font-bold inline border-b-4 ' style={{marginLeft:'70px'}}>{"About/>"}</p>
            </div >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className='txxt text-xl mt-20'>
                class <span style={{color:"yellow"}}>{" Raslen Ouarghi {"} </span> <br/>
                <p style={{color:"gray"}}>
                {"····// I'm ambitious and I love new challenges :) "}<br/>
                {"····// My vast variety of skills is continuously expanding."}<br/>                
                </p>
                <span style={{color:"violet"}}>{"....constructor"} <span style={{color:"white"}}>{"() {"}</span></span>
                <p style={{color:'red'}}>this.<span style={{color:'white'}} >name</span> = <span style={{color:'white'}}> 'Raslen Ouarghi ';</span></p>
                <p style={{color:'red'}}>this.<span style={{color:'white'}} >dateOfBirth</span> = <span style={{color:'orange'}}>22/08/99 ;</span></p>
                <p style={{color:'red'}}>this.<span style={{color:'white'}} >email</span> = <span style={{color:'white'}}> 'Raslen.ouarghi@ensi-uma.tn ' ;</span></p>
                <span style={{color:"white"}}>{" }"}</span><br/>
                <span style={{color:"yellow"}}><span style={{color:'gray'}}>....</span><span></span>Education<span style={{color:"white"}}>{"() {"}</span></span>
                <p style={{color:'violet'}}><span style={{color:'gray'}}>......</span>return <span style={{color:'white'}}>{"["}</span></p>
                <p><span style={{color:'gray'}}>.........<span style={{color:'white'}}>{"{ "}</span><span style={{color:'white'}}>'2018': Baccalaureate at Ahmed Amara eLkef High School ' <span style={{color:'white'}}>{"} ,"}</span></span></span></p>
                <p><span style={{color:'gray'}}>.........<span style={{color:'white'}}>{"{ "}</span><span style={{color:'white'}}>'2018-2019': One year in military academy school'<span style={{color:'white'}}>{"} ,"}</span></span></span></p>
                <p><span style={{color:'gray'}}>.........<span style={{color:'white'}}>{"{ "}</span><span style={{color:'white'}}>'2019-2021': Preparatory institute for engineering studies Monastir'<span style={{color:'white'}}>{"},"}</span></span></span></p>
                <p><span style={{color:'gray'}}>.........<span style={{color:'white'}}>{"{ "}</span><span style={{color:'white'}}>'2021-now' : National School of Computer Science '<span style={{color:'white'}}>{"} ,"}</span></span></span></p>
                <p style={{color:'gray'}}>....<span style={{color:'white'}}>{"]"}</span></p>
                <span style={{color:"white"}}>{" }"}</span>
                <span style={{color:"yellow"}}><span style={{color:'gray'}}>....</span><span></span>Hobbies & Interesting<span style={{color:"white"}}>{"() {"}</span></span>
                <p style={{color:'violet'}}><span style={{color:'gray'}}>......</span>return <span style={{color:'white'}}>{"["}</span></p>
                <p>.........{"{"} Hobbies :<span style={{color:'white'}}>'Football',' Gaming : League of legends','Gaming:Valorant','Gaming:FIFA/PES','Coding','Volleyball'...</span>{"}"}</p>
                <p>.........{"{"} Interesting :<span style={{color:'white'}}>'Club Africain',' FC Barcelone','One Piece','Netflix','Competitions','Self Formation'...</span>{"}"}</p>
                <p style={{color:'gray'}}>....<span style={{color:'white'}}>{"]"}</span></p>
                <span style={{color:"white"}}>{"..}"}<br/><span style={{color:'yellow'}}>{"}"}</span></span>
                   



            </p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            
           
            
        </div>
        <div className='bgd h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ' style={{fontFamily: 'Source Code Pro'}}>
        <h1 className="project-heading " style={{textAlign:'center',justifyContent:'center',margin:'auto',marginBottom:'50px'}}>
               Professional <strong  style={{color:'violet',fontWeight:'1000'}}>Skillset </strong>
           </h1>
        
           <div className="icon-boxes">
      <div className="icon-box mb-9" title='React JS'>
        <FaReact className="icon"  />
      </div>
      <div className="icon-box" title='HTML'>
        <FaHtml5 className="icon"  />
      </div>
      <div className="icon-box" title='CSS'>
        <FaCss3 className="icon"  />
      </div>
      <div className="icon-box" title='Java Script'>
        <FaJsSquare className="icon"  />
      </div>
      <div className="icon-box" title='Node JS'>
        <FaNodeJs className="icon"  />
      </div>
    </div>
    <div className="icon-boxes">
      <div className="icon-box" title='C++'>
        <TbBrandCpp className="icon"  />
      </div>
      <div className="icon-box mb-9" title='Mongodb'>
        <SiMongodb className="icon"  />
      </div>
      <div className="icon-box" title='Python'>
        <FaPython className="icon"   />
      </div>
      <div className="icon-box"  title='Bootstrap '>
        <FaBootstrap className="icon" />
      </div>
      <div className="icon-box" title='Angular '>
        <FaAngular className="icon"  />
      </div>
    </div>
        
    <div className="icon-boxes">
      <div className="icon-box mb-9" title='Adobephotoshop' >
        <SiAdobephotoshop className="icon"  />
      </div>
      <div className="icon-box" title='Express JS'>
        <SiExpress className="icon"  />
      </div>
      <div className="icon-box" title='JAVA'>
        <DiJava className="icon" />
      </div>
      <div className="icon-box" title='GitHub'>
        <FaGithubSquare className="icon" />
      </div>
      <div className="icon-box" title='NPM/YARN'>
        <FaNpm className="icon" />
      </div>
    </div>
    <div className='bg-gradient-to-b from-gray-900 to-gray-700' style={{height:'120%'}}>
    <h1 className="project-heading " style={{textAlign:'center',justifyContent:'center',margin:'auto',marginBottom:'50px'}}>
          <span style={{color:'violet',fontWeight:'1000'}}><strong>Tools</strong></span> I use
        </h1>
        <div className="icon-boxes">
      <div className="icon-box mb-9" title='Vscode' >
        <TbBrandVscode className="icon"  />
      </div>
      <div className="icon-box" title='Jupyter'>
        <SiJupyter className="icon"  />
      </div>
      <div className="icon-box" title='Anaconda'>
        <SiAnaconda className="icon" />
      </div>
      <div className="icon-box" title='Eclipse'>
        <DiEclipse className="icon" />
      </div>
      <div className="icon-box" title='CLion'>
        <SiClion className="icon" />
      </div>
    </div>
        </div>
        
        </div>
       
    </div>
  )
}

export default About