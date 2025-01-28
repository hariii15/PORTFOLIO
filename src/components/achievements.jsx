import '../styles/achievements.css';
import { useEffect, useState } from 'react';

import React from 'react'

const achievements = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
    const handleHashChange = () => {
        if (window.location.hash === '#achievements') {
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
    <div>
        <div id='achievements' className={`container1 ${animate ? 'fade-in' : ''}`}>
            <h1>Achievements</h1>
            <p>Throughout my journey as a Web Developer and lifelong learner, I’ve had the privilege of accomplishing milestones that have shaped my career and personal growth. From mastering new technologies to contributing to impactful projects, each achievement reflects my dedication, persistence, and passion for creating exceptional digital solutions.

            This page highlights some of the key moments and recognitions in my journey so far. Each card below tells a story—of challenges faced, skills honed, and success earned.

            Take a moment to explore, and feel free to reach out if you’d like to learn more about my journey!

</p>
            
            <ul className='ach-ul'>
                <li className='ach-li left'>Won 2nd place in the Paper presentation conducted by the Department of Computer Science and Engineering, Sankara Polytechnic College,Coimbatore</li>
                <li className='ach-li enter1'>Participated in the workshop about Machine Learning conducted by the Department of Computer Science and Engineering, Kongu Engineering College</li>
                <li className='ach-li right'>Participated in the National Level Technical Symposium conducted by the Department of Computer Science and Engineering, Panimalar Engineering College.</li>
            </ul>
                    </div>
    </div>
  )
}

export default achievements