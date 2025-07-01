import React from 'react';
import './Footer.css';
import { FaHeart, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-info">
      <div className="footer-content">
        <span>
          Crafted with <FaHeart className="heart-icon" /> by Jyotiraditya
        </span>
        <a
          href="https://github.com/Vasper16"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub /> View Source
        </a>
      </div>
    </footer>
  );
}
