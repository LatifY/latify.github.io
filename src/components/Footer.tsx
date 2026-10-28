import { socialLinks } from '../data/socialLinks';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-8">
      <div className="content-wrapper py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Latif Yılmaz</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
