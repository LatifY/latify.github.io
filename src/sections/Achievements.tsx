import { useState } from 'react';
import { achievements } from '../data/achievements';
import { getUrlIcon } from '../data/brandIcons';
import { BrandIconImage } from '../components/BrandIconImage';

export const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);
  const hasMore = achievements.length > 3;

  return (
    <section id="achievements" className="section-spacing">
      <div className="content-wrapper">
        <h2 className="text-2xl font-bold mb-6 section-indicator">
          Achievements
        </h2>

        <div className="space-y-6">
          {displayedAchievements.map((achievement) => (
            <article key={achievement.id} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
              <h3 className="text-lg font-semibold mb-1">{achievement.eventName}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.role}</p>
              <p className="text-gray-700 dark:text-gray-400 mb-3">{achievement.description}</p>
              
              {achievement.links && achievement.links.length > 0 && (
                <div className="flex flex-wrap gap-4 text-sm mb-2">
                  {achievement.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-800 dark:text-gray-400 underline hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline"
                    >
                      <BrandIconImage icon={getUrlIcon(link.url)} />
                      {link.label || link.type}
                    </a>
                  ))}
                </div>
              )}
              
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                {new Date(achievement.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
            </article>
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
