import { education } from '../data/education';

export const Education = () => {
  return (
    <section className="section-spacing">
      <div className="content-wrapper">
        <h2 className="text-2xl font-bold mb-6 section-indicator">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <article key={edu.id} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 sm:text-right">
                  <p>{edu.duration}</p>
                  {edu.gpa && <p className="font-medium">GPA: {edu.gpa}</p>}
                </div>
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-400">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>• {achievement}</li>
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
