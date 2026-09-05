
export default function CreateLink() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Create a Short URL</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-8">
        The core of the application. Convert long, unwieldy URLs into clean, branded short links.
      </p>

      <img
        src="/docs/create-url.png"
        alt="Create URL Form"
        className="w-full rounded-xl border border-gray-200 dark:border-[#333] shadow-2xl mb-12"
      />

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Basic Link Creation</h2>

      <div className="space-y-8 mb-12">
        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3">1. URL to be shortened (Required)</h3>
          <p className="text-gray-500 dark:text-[#888] leading-relaxed">
            This is the destination where you want to send your visitors. It must be a valid, full URL starting with <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">http://</code> or <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">https://</code>.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3">2. Title (Optional)</h3>
          <p className="text-gray-500 dark:text-[#888] leading-relaxed">
            Give your link a memorable name so you can easily identify it in your dashboard later. If left empty, the system will attempt to automatically fetch the title from the destination website.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3">3. Custom Short Code (Optional)</h3>
          <p className="text-gray-500 dark:text-[#888] leading-relaxed">
            By default, the app generates a random string of characters (e.g., <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">/aB3x9</code>). You can override this with a readable, custom alias like <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">/promo-2024</code>. Custom codes are case-sensitive and must be unique.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3">4. Add Tags (Optional)</h3>
          <p className="text-gray-500 dark:text-[#888] leading-relaxed">
            Organize your links by typing keywords and pressing Enter. For example: <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">marketing</code>, <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">social</code>. You can filter your dashboard later using these tags.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Advanced Settings</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        Below the tags input, you can expand the <strong>Advanced Settings</strong> accordion to unlock the powerful marketing features. These are entirely optional but highly recommended for marketing campaigns.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-500 dark:text-[#888]">
        <li><strong>UTM Builder:</strong> Automatically append Google Analytics tracking tags.</li>
        <li><strong>Expiration Date:</strong> Set a specific time when the link should expire and redirect to an error page.</li>
        <li><strong>Retargeting Pixels:</strong> Inject Facebook or Google tracking scripts.</li>
        <li><strong>Domain:</strong> Select a custom branded domain instead of the default host.</li>
      </ul>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mt-6">
        <em>Please refer to the specific feature pages in the sidebar for detailed tutorials on how to use these advanced settings.</em>
      </p>
    </div>
  );
}
