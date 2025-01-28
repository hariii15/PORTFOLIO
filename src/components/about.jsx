import React, { useEffect, useState } from 'react'
import '../styles/about.css'

const about = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setAnimate(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id='about' className='container container-leave'>
        <h1>About</h1>
        <p>
        Hi, I'm Hariharpradeep J, a passionate and dedicated Web Developer pursuing my Engineering carrer at Sri Eshwar College of Engineering. With a strong foundation in coding, problem-solving, and design, I specialize in creating visually appealing, user-friendly, and highly functional websites and applications.

        My journey into the world of technology began with a curiosity about how websites work behind the scenes. Since then, I've honed my skills in front-end and back-end development, staying up-to-date with modern tools and technologies to deliver innovative solutions.
        </p>

        <h2>
          What i do
        </h2>
        <ul>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Machine Learning</li>
            <li>DataBase Managment</li>
        </ul>
        <hr></hr>
    </div>
  )
}

export default about