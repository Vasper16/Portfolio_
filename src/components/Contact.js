import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-header">Get in Touch</h1>
        <p className="contact-text">
          I’m actively seeking new opportunities. If you have questions, want to collaborate, or just say hello, please reach out. I’ll respond as soon as I can.
        </p>
        <div className="contact-buttons">
          <a href="mailto:tiwaryjyotiraditya365@gmail.com" className="contact-btn" aria-label="Send Email">
            <FaEnvelope className="icon" />
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/" target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="LinkedIn Profile">
            <FaLinkedin className="icon" />
            LinkedIn
          </a>
          <a href="https://github.com/Vasper16" target="_blank" rel="noopener noreferrer" className="contact-btn" aria-label="GitHub Profile">
            <FaGithub className="icon" />
            GitHub
          </a>
          <a href="tel:+91 7783064102" className="contact-btn" aria-label="Phone Number">
            <FaPhoneAlt className="icon" />
            Contact 
          </a>
        </div>
      </div>
    </section>
  );
}
