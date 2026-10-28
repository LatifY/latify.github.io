import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements', desktopOnly: true },
  { label: 'Hobbies', href: '#hobbies' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 dark:border-gray-800/70 bg-white/75 dark:bg-[#101010]/75 backdrop-blur-md">
      <div className="content-wrapper flex items-center justify-between h-14">
        <a href="#" className="hidden sm:block font-semibold tracking-tight">
          Latif Yılmaz
        </a>

        <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
          <nav className="flex items-center gap-4 sm:gap-5 text-sm text-gray-600 dark:text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${item.desktopOnly ? 'hidden sm:inline' : ''} hover:text-gray-900 dark:hover:text-gray-100 transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
