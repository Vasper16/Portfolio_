import React from 'react';
import { languages } from '../data';

const Tag = ({ label }) => {
  const language = languages.find((x) => x.name.toLowerCase() === label.toLowerCase());

  if (!language) return null;

  return (
    <span className='tag' style={{ color: language.color }}>
      {language.icon}
      <span className="tag-label">{language.name}</span>
    </span>
  );
};

export default Tag;
