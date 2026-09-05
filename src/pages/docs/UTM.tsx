

export default function UTM() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">UTM Builder</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-8">
        Stop using messy spreadsheets to track your marketing campaigns.
      </p>

      <img
        src="/docs/utm-builder.png"
        alt="UTM Builder Form"
        className="w-full rounded-xl border border-gray-200 dark:border-[#333] shadow-2xl mb-12"
      />

      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">How it works</h3>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        When creating a short link, you can enable the UTM Builder in the Advanced Settings.
        Input your Source, Medium, and Campaign name. ShortenURL will automatically append these standard tracking parameters to your destination URL before shortening it.
      </p>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-lg p-6 mb-12 font-mono text-sm text-[#aaa]">
        <div className="mb-2 text-gray-400 dark:text-[#666]">// Original URL:</div>
        <div className="text-black dark:text-white mb-6">https://yourstore.com/summer-collection</div>

        <div className="mb-2 text-gray-400 dark:text-[#666]">// Generated Destination:</div>
        <div className="text-black dark:text-white break-all">
          https://yourstore.com/summer-collection<span className="text-pink-400">?utm_source=facebook&utm_medium=cpc&utm_campaign=summer2024</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Why use UTMs?</h3>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        UTM parameters are the industry standard for tracking the effectiveness of online marketing campaigns across traffic sources and publishing media. They allow Google Analytics (or any other analytics tool on your destination site) to perfectly attribute traffic to your specific ads or emails.
      </p>
    </div>
  );
}
