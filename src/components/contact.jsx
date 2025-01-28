import React from 'react';
import '../styles/contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='container3'>
      <h1>Contact</h1>
      <div className='contact-icons'>
        <a href="mailto:hariharpradeepjaybal@gmail.com" >
          <FaEnvelope size={40} />
        </a>
        <a href="https://github.com/hariii15" >
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/hari2a/" >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
