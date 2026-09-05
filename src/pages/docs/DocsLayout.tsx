import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export default function DocsLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { t } = useAppContext();

  const SEARCH_INDEX = [
    { title: t('docs.getting_started'), path: '/docs', description: 'Local installation, .env configuration, and core concepts.', keywords: 'install setup local docker api .env password sqlite prisma next.js' },
    { title: t('docs.create_url'), path: '/docs/create', description: 'How to convert long URLs into branded short links.', keywords: 'shorten title custom short code tags advanced settings url link' },
    { title: t('docs.analytics'), path: '/docs/analytics', description: 'Track clicks, devices, OS, and referrers.', keywords: 'analytics track clicks ua-parser-js device browser os referrers privacy charts' },
    { title: t('docs.utm_builder'), path: '/docs/utm-builder', description: 'Append Google Analytics tracking tags automatically.', keywords: 'utm source medium campaign tracking analytics parameters' },
    { title: t('docs.pixels'), path: '/docs/pixels', description: 'Inject retargeting pixels and set flash sale expiration dates.', keywords: 'retargeting pixels facebook google tag flash sale expiration date expiry redirect' },
    { title: t('docs.manage_domains'), path: '/docs/domains', description: 'Brand your short links with a custom domain name.', keywords: 'custom domain brand dns a record hostname routing middleware' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(SEARCH_INDEX);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchInputRefDesktop = useRef<HTMLInputElement>(null);
  const searchInputRefMobile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchResults(SEARCH_INDEX);
  }, [t]);

  // Handle Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();

        // Focus the appropriate input depending on screen size
        if (window.innerWidth < 1024) {
          setIsMobileMenuOpen(true);
          setTimeout(() => {
            searchInputRefMobile.current?.focus();
          }, 100);
        } else {
          searchInputRefDesktop.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle search filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.keywords.includes(query) ||
      item.description.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery, t]);

  // Close mobile menu and clear search when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSearchQuery('');
    setIsSearchFocused(false);
  }, [location]);

  const isActive = (path: string) => {
    return currentPath === path
      ? 'text-black dark:text-white font-medium bg-gray-200 dark:bg-[#222]'
      : 'text-gray-500 dark:text-[#888] hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors';
  };

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setIsSearchFocused(false);
    if (searchInputRefDesktop.current) searchInputRefDesktop.current.blur();
    if (searchInputRefMobile.current) searchInputRefMobile.current.blur();
  };

  const renderSidebarContent = (isMobile: boolean) => {
    const activeRef = isMobile ? searchInputRefMobile : searchInputRefDesktop;

    return (
      <div className="p-6 h-full flex flex-col">
        <div className="mb-8 relative z-20">
          <input
            ref={activeRef}
            type="text"
            placeholder={t('docs.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-[#333] rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:border-gray-500 dark:focus:border-[#555] transition-colors placeholder:text-gray-400 dark:placeholder:text-[#666] text-black dark:text-white"
          />
          {!searchQuery && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center border border-gray-300 dark:border-[#333] rounded px-1.5 bg-gray-100 dark:bg-[#222] pointer-events-none">
              <span className="text-[10px] text-gray-500 dark:text-[#888]">⌘K</span>
            </div>
          )}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#888] hover:text-black dark:hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          )}

          {/* Search Results Dropdown */}
          {isSearchFocused && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg shadow-2xl overflow-hidden max-h-[60vh] overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-2">
                  {searchResults.map((result, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleSearchResultClick(result.path)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#222] transition-colors border-b border-gray-100 dark:border-[#222] last:border-0"
                      >
                        <div className="text-black dark:text-white font-medium text-sm mb-1">{result.title}</div>
                        <div className="text-gray-500 dark:text-[#888] text-xs line-clamp-2">{result.description}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-6 text-center text-sm text-gray-500 dark:text-[#888]">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto pb-10">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 dark:text-[#666] mb-3 uppercase tracking-wider">{t('docs.start')}</h4>
            <nav className="flex flex-col space-y-1">
              <Link to="/docs" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs')}`}>{t('docs.getting_started')}</Link>
              <Link to="/docs/create" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs/create')}`}>{t('docs.create_url')}</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 dark:text-[#666] mb-3 uppercase tracking-wider">{t('docs.advanced')}</h4>
            <nav className="flex flex-col space-y-1">
              <Link to="/docs/analytics" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs/analytics')}`}>{t('docs.analytics')}</Link>
              <Link to="/docs/utm-builder" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs/utm-builder')}`}>{t('docs.utm_builder')}</Link>
              <Link to="/docs/pixels" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs/pixels')}`}>{t('docs.pixels')}</Link>
              <Link to="/docs/domains" className={`px-3 py-2 rounded-md text-sm ${isActive('/docs/domains')}`}>{t('docs.manage_domains')}</Link>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row w-full bg-[var(--bg-color)] text-[var(--fg-color)] font-sans relative transition-colors duration-200">

      {/* Mobile Header with Toggle */}
      <div className="lg:hidden w-full border-b border-gray-200 dark:border-[#333] bg-gray-50 dark:bg-[#0a0a0a] flex items-center px-6 py-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-gray-500 dark:text-[#888] hover:text-black dark:hover:text-white mr-4 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <span className="font-semibold text-sm">{t('nav.docs')}</span>
      </div>

      {/* Mobile Off-Canvas Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sliding Panel */}
          <aside className="relative flex flex-col w-72 max-w-[80%] h-full bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-[#333] transform transition-transform duration-300 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-[#222] shrink-0">
              <span className="font-bold text-lg tracking-tight">Docs Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 dark:text-[#888] hover:text-black dark:hover:text-white focus:outline-none bg-gray-100 dark:bg-[#111] p-1.5 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              {renderSidebarContent(true)}
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside className="w-64 border-r border-gray-200 dark:border-[#333] hidden lg:block overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
        {renderSidebarContent(false)}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-20" style={{ height: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
    </div>
  );
}
