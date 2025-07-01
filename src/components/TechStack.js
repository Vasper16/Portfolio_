import React from 'react';
import { languages } from '../data';
import SkillsGrid from './SkillsGrid';
import { FaStackOverflow } from 'react-icons/fa';

export default function TechStack() {
  return (
    <section
      className="techstack"
      style={{
        padding: '2rem 1rem',
        backgroundColor: '#0f172a', // Matches .skills-grid
        borderRadius: '1rem',
        color: '#e2e8f0', // Light text for dark background
      }}
    >
      <div
        className="techstack-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          fontSize: '1.8rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: '#38bdf8', // Accent blue color for heading
        }}
      >
        <FaStackOverflow />
        Tech Stack
      </div>
      <SkillsGrid skills={languages} />
    </section>
  );
}
