 import React, { useState } from 'react';
import Resume from '../assets/Jyotiraditya_Resume.pdf';

export default function Hero() {
  const [download, setDownload] = useState(false);

  return (
    <section className='hero'>
      <div className='hero-header'>
        <p className='hero-small-heading '>Hi, I’m</p>
        <h1 className='hero-big-heading'>Jyotiraditya,</h1>
        <h1 className='hero-big-heading secondry-big-heading'>a Software & AI/ML Enthusiast</h1>
        <p className='hero-desc'>
          I’m a final-year Electronics and Communication Engineering student at BIT Mesra with strong technical foundations and a passion for building impactful, real-world solutions.
          <br /><br />
          I’ve contributed to research in wireless communication and signal processing during my internship at IIT Patna, and I’m currently developing deep learning models using Python and TensorFlow.
          <br /><br />
          I bring full-stack development experience using React, Node.js, and REST APIs, backed by solid knowledge in data structures, system design, and databases.
          As Placement Coordinator for the 2025–26 graduating batch, I lead industry outreach and campus recruitment initiatives.
        </p>
      </div>
      <button
        className='hero-btn primary-btn'
        onClick={() => setDownload(true)}
      >
        <a href={Resume} download='Jyotiraditya_Resume'>
          <p>{download ? 'Thanks For Your Interest !' : 'Download Resume'}</p>
        </a>
      </button>
    </section>
  );
}