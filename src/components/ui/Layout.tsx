import { Link, Outlet } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export default function Layout() {
  const { theme, toggleTheme, language, toggleLanguage, t } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--fg-color)] transition-colors duration-200">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-color)]/90 backdrop-blur-md transition-colors duration-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center group">
              {/* Vercel-like triangle logo */}
              <svg height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--fg-color)] w-6 h-6 mr-3 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
              </svg>
              <span className="font-bold text-lg tracking-tight group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors hidden sm:block">OpenShort</span>
            </Link>
            <nav className="flex items-center space-x-6 sm:ml-4 text-sm text-gray-600 dark:text-[#888]">
              <Link to="/docs" className="hover:text-black dark:hover:text-white transition-colors">{t('nav.docs')}</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 text-sm">

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-gray-600 dark:text-[#888] hover:text-black dark:hover:text-white transition-colors font-medium text-xs sm:text-sm uppercase tracking-wider"
              title="Toggle Language"
            >
              {language}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-[#888] hover:text-black dark:hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                // Sun icon for light mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                // Moon icon for dark mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>

            <a href="https://github.com/Yusufparker/OpenShort" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-[#888] hover:text-black dark:hover:text-white transition-colors flex items-center">
              <svg className="w-5 h-5 sm:mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
