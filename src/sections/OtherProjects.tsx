import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { otherProjects } from '../data/otherProjects';

export const OtherProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3);
  const hasMore = otherProjects.length > 3;

  return (
    <section className="section-spacing">
      <div className="content-wrapper">
        <h2 
          className="text-3xl font-bold mb-8 section-indicator"
        >
          Other Projects
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
