
export default function Pixels() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Pixels & Expiring Links</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-12">
        Turn simple links into a formidable retargeting engine and create authentic scarcity.
      </p>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Retargeting Pixels</h2>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">How to inject a Pixel</h3>
        <ol className="list-decimal pl-5 space-y-3 text-gray-500 dark:text-[#888] leading-relaxed">
          <li>On the Create Page, open <strong>Advanced Settings</strong>.</li>
          <li>Find the <strong>Retargeting Pixels</strong> section.</li>
          <li>Paste your Facebook Pixel ID (e.g. <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">123456789</code>) or Google Tag ID.</li>
          <li>Save the link. That's it!</li>
        </ol>
      </div>

      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        When a user clicks your pixel-enabled link, ShortenURL alters the redirect behavior.
        Instead of a standard <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">301/302 HTTP Redirect</code>, the server returns a temporary white HTML page that executes your Pixel script for exactly 1 second, before instantly forwarding the user via JavaScript.
      </p>

      <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg p-6 mb-12">
        <p className="text-black dark:text-white font-medium mb-2">The result?</p>
        <p className="text-gray-500 dark:text-[#888] text-sm">
          You can build retargeting audiences on Facebook and Google Ads from people who click your links, even if you don't own the destination website (e.g., linking to an Amazon product or a news article).
        </p>
      </div>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6 mt-12">Expiring Links (Flash Sales)</h2>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">How to set an Expiry Date</h3>
        <ol className="list-decimal pl-5 space-y-3 text-gray-500 dark:text-[#888] leading-relaxed">
          <li>On the Create Page, open <strong>Advanced Settings</strong>.</li>
          <li>Find the <strong>Expiration Date</strong> input.</li>
          <li>Select the exact date and time the link should die.</li>
        </ol>
      </div>

      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        If a user clicks the short link after the deadline has passed, the server intercepts the request and routes them to a premium <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">/expired</code> error page instead of the original destination. This enforces real scarcity in your marketing campaigns.
      </p>
    </div>
  );
}
