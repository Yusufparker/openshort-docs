
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { t } = useAppContext();

  return (
    <div className="flex-1 w-full bg-[var(--bg-color)] text-[var(--fg-color)] font-sans overflow-x-hidden transition-colors duration-200">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row gap-12 relative z-10">

        {/* Left Side Features / Stats */}
        <div className="w-full lg:w-1/4 flex flex-col justify-start pt-4">
          <h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-2 leading-tight mt-12 lg:mt-0">
            {t('home.hero.title1').split('.')[0]},
          </h2>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
            {t('home.hero.title2').split(' ')[0]} <span className="text-gray-500 dark:text-[#888] font-medium">and</span>
          </h2>
          <h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-16 text-gray-500 dark:text-[#888] leading-tight">
            target visitors.
          </h2>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-[#888] mb-4 uppercase tracking-widest">Core & Advanced</h3>
            <div className="flex flex-col space-y-3">
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>{t('home.feat.custom')}</span>
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>{t('home.feat.tags')}</span>
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 dark:bg-[#888] rounded-full"></span>{t('home.feat.utm')}</span>
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 dark:bg-[#888] rounded-full"></span>{t('home.feat.expiry')}</span>
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-300 dark:bg-[#333] rounded-full"></span>{t('home.feat.pixels')}</span>
              <span className="text-black dark:text-white font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-300 dark:bg-[#333] rounded-full"></span>{t('home.feat.domains')}</span>
            </div>
          </div>
        </div>

        {/* Right Side Main Content */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-12 leading-[1.1] text-black dark:text-white">
            A simple URL shortener <br /> with powerful features.
          </h1>

          {/* Showcase Card */}
          <div className="rounded-xl border border-gray-200 dark:border-[#333] bg-white dark:bg-[#0a0a0a] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl group hover:border-gray-300 dark:hover:border-[#555] transition-colors duration-500">

            {/* Mock Dashboard Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-[#222] bg-gray-50 dark:bg-[#111]">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-sm text-black dark:text-white">Overview</span>
              </div>
              <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-[#888]">
                <svg className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <div className="flex items-center space-x-3 cursor-pointer hover:text-black dark:hover:text-white">
                  <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-[#333] flex items-center justify-center text-black dark:text-white font-medium text-sm">A</div>
                  <span className="font-medium">admin</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </div>
              </div>
            </div>

            {/* Inner Content of Showcase */}
            <div className="p-8 md:p-12 flex flex-col relative z-10">

              {/* Mock Dashboard Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
                <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-xl p-5 flex justify-between items-center group-hover:border-gray-300 dark:group-hover:border-[#444] transition-colors">
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-[#888] uppercase tracking-widest mb-1 font-medium">Total URLs</div>
                    <div className="text-3xl font-bold text-black dark:text-white">1,024</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-xl p-5 flex justify-between items-center group-hover:border-gray-300 dark:group-hover:border-[#444] transition-colors">
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-[#888] uppercase tracking-widest mb-1 font-medium">Total Visits</div>
                    <div className="text-3xl font-bold text-black dark:text-white">84,392</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-xl p-5 flex justify-between items-center group-hover:border-gray-300 dark:group-hover:border-[#444] transition-colors">
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-[#888] uppercase tracking-widest mb-1 font-medium">Tags</div>
                    <div className="text-3xl font-bold text-black dark:text-white">12</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Marketing copy integrated gracefully into the dashboard layout */}
              <div className="text-center pt-8 border-t border-gray-200 dark:border-[#222]">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
                  {t('home.hero.title1')} <br className="hidden sm:block" /> {t('home.hero.title2')}
                </h2>
                <p className="text-gray-600 dark:text-[#888] max-w-xl mx-auto mb-10 text-sm leading-relaxed">
                  {t('home.hero.desc')}
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-16 justify-center">
                  <Link to="/docs" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                    {t('home.hero.docs')}
                  </Link>
                  <a href="https://github.com/Yusufparker/OpenShort" target="_blank" rel="noreferrer" className="bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#333] text-black dark:text-white px-6 py-2.5 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-[#222] transition-colors">
                    {t('home.hero.github')}
                  </a>
                </div>
              </div>

            </div>

            {/* Visual glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-black/5 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="container mx-auto px-6 py-24 border-t border-gray-200 dark:border-[#222]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">Everything you need. Nothing you don't.</h2>
          <p className="text-gray-500 dark:text-[#888] text-lg max-w-2xl mx-auto">
            A fast, reliable URL shortener with all the extra marketing tools you need to track and convert your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: UTM Builder (Span 2) */}
          <div className="col-span-1 md:col-span-2 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-[#444] transition-colors relative overflow-hidden group shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/10 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{t('home.card2.title')}</h3>
            <p className="text-gray-600 dark:text-[#888] mb-6 max-w-md">
              {t('home.card2.desc')}
            </p>
            <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg p-4 font-mono text-xs text-gray-500 dark:text-[#aaa]">
              <span className="text-black dark:text-white">?utm_source=</span>facebook<br />
              <span className="text-black dark:text-white">&utm_medium=</span>cpc<br />
              <span className="text-black dark:text-white">&utm_campaign=</span>summer_sale
            </div>
          </div>

          {/* Card 2: Retargeting */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-[#444] transition-colors relative overflow-hidden group shadow-sm dark:shadow-none">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 blur-[80px] group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="h-12 w-12 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{t('home.card3.title')}</h3>
            <p className="text-gray-600 dark:text-[#888]">
              {t('home.card3.desc')}
            </p>
          </div>

          {/* Card 3: Analytics */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-[#444] transition-colors relative overflow-hidden group shadow-sm dark:shadow-none">
            <div className="absolute top-0 left-0 w-48 h-48 bg-green-500/5 blur-[80px] group-hover:bg-green-500/10 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{t('home.card1.title')}</h3>
            <p className="text-gray-600 dark:text-[#888]">
              {t('home.card1.desc')}
            </p>
          </div>

          {/* Card 4: Expiring Links (Span 2) */}
          <div className="col-span-1 md:col-span-2 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-[#444] transition-colors relative overflow-hidden group shadow-sm dark:shadow-none">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-[100px] group-hover:bg-red-500/10 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{t('home.card4.title')}</h3>
            <p className="text-gray-600 dark:text-[#888] mb-6 max-w-md">
              {t('home.card4.desc')}
            </p>
            <div className="flex items-center space-x-3">
              <span className="bg-gray-100 dark:bg-[#222] border border-gray-200 dark:border-[#333] px-3 py-1 rounded text-xs text-black dark:text-white">{t('home.card4.expires')}</span>
              <span className="text-gray-400 dark:text-[#666]">➔</span>
              <span className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 px-3 py-1 rounded text-xs text-red-600 dark:text-red-500">{t('home.card4.redirects')}</span>
            </div>
          </div>

          {/* Card 5: Link Management */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl p-8 hover:border-gray-300 dark:hover:border-[#444] transition-colors relative overflow-hidden group lg:col-span-3 shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-orange-500/5 blur-[100px] group-hover:bg-orange-500/10 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{t('home.card5.title')}</h3>
            <p className="text-gray-600 dark:text-[#888] max-w-2xl">
              {t('home.card5.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32 border-t border-gray-200 dark:border-[#222]">
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gradient-to-b dark:from-[#111] dark:to-black border border-gray-200 dark:border-[#333] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-lg dark:shadow-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-black/5 dark:bg-white/5 blur-[150px] pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative z-10 text-black dark:text-white">
            Ready to shorten your links?
          </h2>
          <p className="text-gray-600 dark:text-[#888] text-lg mb-10 max-w-xl mx-auto relative z-10">
            Deploy your own instance in minutes. Take full ownership of your data, links, and audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
            <Link to="/docs" className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-xl">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
