import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import LanguageIcon from './LanguageIcon';

export default function ProjectCard({
  project,
  stackList,
  reverse,
  containerRef,
}) {
  return (
    <div
      className="project-card"
      style={{
        flexDirection: `${reverse ? 'row-reverse' : 'row'}`,
      }}
    >
      <div
        className="project-card-img"
        style={{ transform: `${reverse ? 'translateX(5rem)' : ''}` }}
      >
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-card-info">
        <h6 className="project-card-title-featured">featured project</h6>
        <h1 className="project-card-title">{project.name}</h1>
        <span className="project-card-links">
          <a href={project.site_url} target="_blank" rel="noopener noreferrer" aria-label="Live site link">
            <BsBoxArrowUpRight />
          </a>
        </span>
        <span className="project-card-links">
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo link">
            <FaGithub />
          </a>
        </span>
        <p className="project-card-text">{project.desc}</p>

        {/* Tech Stack Section */}
        <div className="stack-container">
          <h3>Tech stack used:</h3>
          <div className="stack-icons">
            {stackList.map((language, index) => (
              <LanguageIcon
                key={index}
                language={language}
                containerRef={containerRef}
                cardIcon={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
