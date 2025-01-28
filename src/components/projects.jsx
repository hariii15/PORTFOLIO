import React from 'react'
import Iotimage from '../thingspeakfritzing.webp'
import diab from '../diab.jpg'
import '../styles/projects.css'
import { useEffect, useState } from 'react';

const projects = () => {
    const [animate, setAnimate] = useState(false);

     useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#projects') {
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
    <div className={`container1 ${animate ? 'fade-in' : ''}`} id='projects'>
        <h1>Projects</h1>
        <p className='pro-intro'>This page showcases a collection of my best work, highlighting the skills, creativity, and passion I bring to every project. From dynamic websites to innovative IoT solutions, each project represents a unique challenge and an opportunity to grow as a developer.
        </p>
        <div className="projects3">
            <div className="pro1">
                <div className="pro1-left">
                    <h2>Smart Irrigation System</h2>
                    <img src={Iotimage} alt="alt" />
                </div>
                <div className="pro1-right">
                    <p>
                    The Smart Irrigation System Simulator is an innovative project that combines IoT technology and interactive animation to demonstrate how automated irrigation systems work. Built using Wokwi for ESP32 simulation, ThingSpeak for data visualization, and Unity for immersive animations, this project provides a clear and engaging representation of how smart irrigation systems optimize water usage.
                    </p>
                    <ul>
                        <h2>Technology:</h2>
                        <li > IoT, Unity, ThingSpeak</li>
                        <li>Role: 3D model Designing</li>
                        <li>Year: 2022</li> 
                    </ul>
                </div>
            </div>
            <div className="pro1 pro2">
                <div className="pro1-right pro1-right1">
                    <h2>Diabatese Prediction Model</h2>
                    <img src={diab} alt="" className='image'/>
                </div>
                <div className="pro1-left pro1-left1">
                    <p>
                    This interactive Streamlit application integrates data visualization with a machine learning model to predict the risk of diabetes. The app offers a user-friendly interface, allowing users to visualize key data trends and make real-time predictions based on input parameters.
                    </p>
                    <ul>
                        <h2>Technology</h2>
                        <li> Machine Learning, Streamlit</li>
                        <li>Role: Developer</li>
                        <li>Year: 2024</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default projects