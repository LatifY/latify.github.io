import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { gameProjects } from '../data/gameProjects';

export const GameProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? gameProjects : gameProjects.slice(0, 3);
  const hasMore = gameProjects.length > 3;

  return (
    <section id="projects" className="section-spacing">
      <div className="content-wrapper">
        <h2 className="text-2xl font-bold mb-6 section-indicator">
          Game Development
        </h2>

        <div>
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && (
          <button 
            onClick={() => setShowAll(!showAll)}
            className="load-more-btn"
          >
            <span>{showAll ? 'Show less' : 'Show more'}</span>
            <svg 
              className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};
