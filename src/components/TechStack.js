import React from 'react';
import SkillsGrid from './SkillsGrid';
import { languages } from '../data';
import { FaStackOverflow } from 'react-icons/fa';

export default function TechStack() {
  return (
    <section className="techstack" style={{ padding: '3rem 1rem' }}>
      <div className="techstack-header" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '2rem', fontWeight: '700', color: '#f0f0f0', marginBottom: '2rem' }}>
        <FaStackOverflow />
        Tech Stack
      </div>
      <SkillsGrid skills={languages} />
    </section>
  );
}
