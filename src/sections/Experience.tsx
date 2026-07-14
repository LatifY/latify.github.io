import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section className="section-spacing">
      <div className="content-wrapper">
        <h2 className="text-3xl font-bold mb-8 section-indicator">
          Experience
        </h2>

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={item.id} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.role}</p>
                  {item.team && <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{item.team}</p>}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 sm:text-right">
                  <p>{item.duration}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-400">{item.description}</p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};