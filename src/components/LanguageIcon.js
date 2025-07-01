import React, { useState, useRef } from 'react';
import './LanguageIcon.css';

export default function LanguageIcon({ language = {}, cardIcon }) {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={iconRef}
      className="language-icon"
      style={{
        '--icon-color': language.color || '#555',
        margin: cardIcon ? '0.25rem' : '0.5rem',
        fontSize: cardIcon ? '1.2rem' : '1.5rem',
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      tabIndex={0}
      aria-label={language.name ? `${language.name} icon, hover or focus for more info` : 'language icon'}
    >
      <div>
        {language.icon || null}
      </div>

      <div
        className={`tooltip${isHovered ? ' active' : ''}`}
        id={language.name ? `tooltip-${language.name}` : undefined}
        role="tooltip"
      >
        {language.desc}
      </div>
    </div>
  );
}
