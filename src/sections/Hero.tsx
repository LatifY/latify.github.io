import { socialLinks } from '../data/socialLinks';
import { getUrlIcon } from '../data/brandIcons';
import { TypewriterText } from '../components/TypewriterText';
import { BrandIconImage } from '../components/BrandIconImage';
import { LeetCode } from './LeetCode';

export const Hero = () => {
  return (
    <section className="pt-14 pb-6 sm:pt-20">
      <div className="content-wrapper">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <img
              src="https://avatars.githubusercontent.com/u/60092611?v=4"
              alt="Latif Yilmaz"
              className="hero-avatar"
            />
          </div>

          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-1 hero-title">
              <span className="gradient-text">Hi, I'm Latif</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-400 mb-4 hero-subtitle">
              <TypewriterText />
            </p>

            <div className="flex flex-wrap items-center gap-x-5 hero-links">
              {socialLinks.map((link, index) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link inline-flex items-center gap-1.5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BrandIconImage icon={getUrlIcon(link.url)} />
                  {link.platform}
                </a>
              ))}
            </div>

            <LeetCode />
          </div>
        </div>
      </div>
    </section>
  );
};
