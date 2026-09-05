
export default function GettingStarted() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Getting Started</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-12">
        Deploy your own URL shortener, configure your environment, and start managing links in minutes.
      </p>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Local Installation & Configuration</h2>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#333] rounded-lg overflow-hidden shadow-xl mb-12">
        <div className="flex items-center px-4 py-2 border-b border-gray-200 dark:border-[#222] bg-gray-50 dark:bg-[#111]">
          <span className="text-xs text-gray-500 dark:text-[#888] font-mono">&gt;_ terminal</span>
        </div>
        <div className="p-6 font-mono text-sm leading-loose">
          <div className="space-y-2">
            <div><span className="text-pink-500">git</span> clone https://github.com/Yusufparker/OpenShort</div>
            <div><span className="text-pink-500">cd</span> openshort</div>
            <div><span className="text-pink-500">npm</span> install</div>
            <div><span className="text-gray-500"># 1. Setup Environment Variables</span></div>
            <div><span className="text-pink-500">cp</span> .env.example .env</div>
            <div><span className="text-gray-500"># 2. Push SQLite Schema</span></div>
            <div><span className="text-pink-500">npx</span> prisma db push</div>
            <div><span className="text-gray-500"># 3. Start Development Server</span></div>
            <div><span className="text-pink-500">npm</span> run dev</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Setting up .env and Passwords</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        When you run <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">cp .env.example .env</code>, you create your local environment configuration file. Open the <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">.env</code> file in your code editor.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-500 dark:text-[#888] mb-12">
        <li><strong className="text-black dark:text-white">Database URL:</strong> By default, this points to a local SQLite file (e.g. <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">file:./dev.db</code>). You don't need to change this unless you want to use PostgreSQL or MySQL.</li>
        <li><strong className="text-black dark:text-white">Application Password:</strong> Look for a variable named <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">PASSWORD</code> or <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">ADMIN_PASSWORD</code>. Set this to a strong password. You will use this password to access your dashboard and create new short URLs.</li>
      </ul>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Core Concepts</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        OpenShort is built on Next.js 15 App Router and Prisma. It uses a local SQLite database for maximum portability and zero-config deployment.
        All analytics data is tracked on the edge/server-side to bypass ad-blockers and provide hyper-accurate statistics.
      </p>

      <img
        src="/docs/dashboard.png"
        alt="OpenShort Dashboard"
        className="w-full rounded-xl border border-gray-200 dark:border-[#333] shadow-2xl mb-12 mt-8"
      />
    </div>
  );
}
