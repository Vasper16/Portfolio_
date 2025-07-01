import React, { useState } from 'react';
import './SkillsGrid.css';

export default function SkillsGrid({ skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="skill-card"
          tabIndex={0}
          aria-describedby={`tooltip-${skill.name}`}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          onFocus={() => setHoveredSkill(skill.name)}
          onBlur={() => setHoveredSkill(null)}
        >
          <div
            className="icon"
            style={{
              color: skill.color || '#38bdf8', // fallback to blue
            }}
          >
            {skill.icon}
          </div>
          <div className="skill-name">{skill.name}</div>

          {hoveredSkill === skill.name && skill.desc && (
            <div
              role="tooltip"
              id={`tooltip-${skill.name}`}
              className="tooltip"
            >
              {skill.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
