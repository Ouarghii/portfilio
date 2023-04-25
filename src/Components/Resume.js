import React from 'react';
import cvImage from '../assets/cvp.png';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  
  const handleClick = () => {
    // Create a div element with the image
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = cvImage;
    img.style.width = '100%';
    img.style.height = '100%';
    div.appendChild(img);

    // Use html2pdf to download the image as a PDF
    const opt = {
      margin:       0,
      filename:     'cv.pdf',
      image:        { type: 'png', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(div).save();
  };

  return (
    <div name="resume"className='txth-screen w-full bg-gradient-to-b from-gray-800 to-black' style={{fontFamily: 'Source Code Pro',marginTop:'1240px'}}>
      <div className=' p-4 mx-auto flex flex-col justify-center w-full h-full' style={{fontFamily: 'Source Code Pro'}}>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500' style={{color:'white',marginLeft:'70px'}}>{"Resume/>"}</p>
          <div className="download-cv-button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <button className="download-cv-button__top" onClick={handleClick} style={{marginBottom:'50px',marginTop:'50px', padding: '1rem 2rem', border: 'none', borderRadius: '0.5rem', fontSize: '1.5rem', color: 'violet',fontWeight:'Bold',fontSize:'30px',background:'azure'}}>
              Download CV
            </button>
            <div className="download-cv-button__bottom" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img className='max-w-screen-lg' src={cvImage} alt="Download CV" style={{marginBottom:'50px', width: '100%', height: '100%', maxWidth: '800px'}} media="(min-width: 768px) and (max-width: 1024px)" />
              {/* <img className='max-w-screen-lg' src={cvImage} alt="Download CV" style={{marginBottom:'50px', width: '100%', height: '100%'}} media="(max-width: 767px)" /> */}
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Resume;