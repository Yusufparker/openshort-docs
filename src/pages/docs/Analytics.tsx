
export default function Analytics() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Advanced Analytics</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-8">
        Track every click with surgical precision using our built-in <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">ua-parser-js</code> and <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">Recharts</code> integration.
      </p>

      <img
        src="/docs/analytics.png"
        alt="Analytics Dashboard"
        className="w-full rounded-xl border border-gray-200 dark:border-[#333] shadow-2xl mb-12"
      />

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">How to use Analytics</h2>
      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6 mb-12">
        <ol className="list-decimal pl-5 space-y-4 text-gray-500 dark:text-[#888] leading-relaxed">
          <li>Create a short URL on the <strong className="text-black dark:text-white">Create Page</strong>.</li>
          <li>Share your short link on social media, emails, or ads.</li>
          <li>Go to the <strong className="text-black dark:text-white">Links Dashboard</strong> (`/urls`) and click the <strong className="text-black dark:text-white">Analytics icon (Chart)</strong> next to your generated link.</li>
          <li>You will be taken to a dedicated, interactive `/analytics/[id]` page displaying all real-time data!</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">What gets tracked?</h3>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-4">
        Every time a user visits your short URL, the server logs a hit before redirecting them. We track:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-[#888] mb-12">
        <li><strong className="text-black dark:text-white">Time Series Data:</strong> Daily, weekly, and monthly click volume mapped on Recharts.</li>
        <li><strong className="text-black dark:text-white">Device Types:</strong> Mobile, Desktop, and Tablet categorization.</li>
        <li><strong className="text-black dark:text-white">Browsers & OS:</strong> Exact versions of Chrome, Safari, iOS, Windows, etc.</li>
        <li><strong className="text-black dark:text-white">Referrers:</strong> Know if traffic came from Facebook, Twitter, or direct links.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Privacy & Ad Blockers</h3>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        Because tracking happens server-side during the Next.js API Route execution, it is completely immune to client-side ad blockers. You get 100% accurate data without compromising user privacy.
      </p>
    </div>
  );
}
