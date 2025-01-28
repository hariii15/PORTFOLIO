import React from 'react';
import myimage from '../profile img.jpg';
import '../styles/page.css';
import TiltedCard from './TiltedCard';


const Page = () => {
  return (
    <div className='body'>
      <nav className='navbar fade-in'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div id='home' className='home fade-in'>
      <TiltedCard
        imageSrc={myimage}
        captionText=""
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">
          </p>
        }
      />
  
        <div className='right fade-in1'>
          <h1>Hi, <span>Hariharpradeep J</span></h1>
          <p className='description' style={{fontSize:'1.5rem', fontWeight:'300'}}>Fullstack Developer | ML Engineer</p>
        </div>
      </div>

      <div className='marquee'>
        <span>Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio</span>
        <span aria-hidden='true'>Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio &nbsp; Portfolio</span>
      </div>
    </div>  

  );
};

export default Page;