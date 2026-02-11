import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasImage =
    project.images && project.images.length > 0 && project.images[0];

  const slides = project.images
    .filter((img) => img)
    .map((img) => ({ src: img }));

  const formattedDate = (() => {
    const date = new Date(project.date);
    if (isNaN(date.getTime())) {
      return project.date;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  })();

  return (
    <>
      <article className="py-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
        <div className="flex gap-6">
          {hasImage && (
            <div
              className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden glass-card cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const placeholder =
                    target.nextElementSibling as HTMLDivElement;
                  if (placeholder) placeholder.style.display = "flex";
                }}
              />
              <div className="project-placeholder hidden w-full h-full items-center justify-center">
                <svg
                  className="w-12 h-12 opacity-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-700 dark:text-gray-400 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600 dark:text-gray-400">
              {project.technologies
                .map((tech) => <span key={tech}>{tech}</span>)
                .reduce((prev, curr) => [prev, " · ", curr] as any)}
            </div>

            <div className="flex items-center gap-4 text-sm flex-wrap">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-400 underline hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline"
                >
                  {link.type === "github" && "GitHub"}
                  {link.type === "itchio" && "Itch.io"}
                  {link.type === "video" && "Video"}
                  {link.type === "steam" && "Steam"}
                  {link.type === "live" && "Live Demo"}
                  {link.type === "linkedin" && "LinkedIn"}
                  {link.type === "website" && "Website"}
                  {link.type === "googleplay" && "Google Play"}
                  {link.type === "instagram" && "Instagram"}
                </a>
              ))}
              <span className="text-gray-500 dark:text-gray-500 text-xs ml-auto">
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </article>

      <Lightbox open={isOpen} close={() => setIsOpen(false)} slides={slides} />
    </>
  );
};
