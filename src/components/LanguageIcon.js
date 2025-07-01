import React, { useState, useRef } from 'react';
import { useGlobalContext } from '../context';
import './LanguageIcon.css';

export default function LanguageIcon({ language = {}, containerRef, cardIcon }) {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const handleMouseOver = (e) => {
    setIsHovered(true);
    if (language.name && language.desc) {
      openSubmenu(e, { name: language.name, desc: language.desc }, containerRef);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    closeSubmenu();
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
      aria-describedby={language.name ? `tooltip-${language.name}` : undefined}
      aria-label={language.name ? `${language.name} icon, hover or focus for more info` : 'language icon'}
    >
      <div>
        {language.icon || null}
      </div>

      {isHovered && language.desc && (
        <div className="tooltip" id={`tooltip-${language.name}`} role="tooltip">
          {language.desc}
        </div>
      )}
    </div>
  );
}
