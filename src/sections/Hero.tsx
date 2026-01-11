import { socialLinks } from '../data/socialLinks';
import { TypewriterText } from '../components/TypewriterText';

export const Hero = () => {
  return (
    <section className="pt-12 pb-12 sm:pt-12">
      <div className="content-wrapper">
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
          {/* Avatar with animated glow */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/60092611?v=4"
              alt="Latif Yilmaz"
              className="hero-avatar"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 hero-title">
              <span className="gradient-text">Hi, I'm Latif</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-400 mb-6 max-w-xl hero-subtitle">
              <TypewriterText />
            </p>

            <div className="flex items-center justify-start gap-6 hero-links">
              {socialLinks.map((link, index) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
