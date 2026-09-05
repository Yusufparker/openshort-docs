
export default function Domains() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Manage Custom Domains</h1>
      <p className="text-gray-500 dark:text-[#888] text-lg leading-relaxed mb-12">
        Brand your short links with your own custom domain name (e.g., <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">link.yourbrand.com</code>). OpenShort supports infinite custom domains out of the box using Next.js edge routing.
      </p>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Step 1: Configure DNS & Proxy (Cloudflare / VPS)</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        Before adding the domain to OpenShort, you must point your domain to your server's IP address. If you are using a VPS (Virtual Private Server) and Cloudflare, follow these exact steps:
      </p>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6 mb-12">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Cloudflare DNS Setup</h3>
        <ol className="list-decimal pl-5 space-y-4 text-gray-500 dark:text-[#888] leading-relaxed mb-6">
          <li>Log in to your Cloudflare Dashboard and select your domain.</li>
          <li>Go to the <strong>DNS &gt; Records</strong> section.</li>
          <li>Click <strong>Add Record</strong> and fill in the following:
            <ul className="list-none mt-3 space-y-2">
              <li><span className="text-black dark:text-white font-medium">Type:</span> A</li>
              <li><span className="text-black dark:text-white font-medium">Name:</span> <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-xs">link</code> (or your preferred subdomain)</li>
              <li><span className="text-black dark:text-white font-medium">IPv4 address:</span> Your VPS public IP address (e.g., <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-xs">198.51.100.1</code>)</li>
              <li><span className="text-black dark:text-white font-medium">Proxy status:</span> ☁️ <strong>Proxied (Orange Cloud)</strong></li>
            </ul>
          </li>
        </ol>

        <div className="bg-blue-950/30 border border-blue-900/50 p-4 rounded-lg">
          <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            SSL / HTTPS Configuration
          </h4>
          <p className="text-[#aaa] text-sm leading-relaxed">
            Since we are using Cloudflare Proxy (Orange Cloud), Cloudflare handles the SSL certificates automatically. Ensure your Cloudflare SSL/TLS encryption mode is set to <strong>"Full"</strong> or <strong>"Flexible"</strong> so your users see the secure lock icon on your short links.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Step 2: Add Domain to OpenShort</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        Once your DNS is propagating, you need to register the domain inside the OpenShort dashboard so the database recognizes incoming traffic from it.
      </p>

      <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-xl p-6 mb-12 space-y-4 text-gray-500 dark:text-[#888] leading-relaxed">
        <p>1. Navigate to <strong>Settings &gt; Manage Domains</strong> in your OpenShort dashboard.</p>
        <p>2. Click the <strong>Add Domain</strong> button.</p>
        <p>3. Enter your exact, full hostname (e.g., <code className="bg-gray-100 dark:bg-[#222] text-black dark:text-white px-1.5 py-0.5 rounded text-sm">link.yourbrand.com</code>). Do not include <code>https://</code> or trailing slashes.</p>
        <p>4. Save the domain. It will now appear in your active domains list.</p>
      </div>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">Step 3: Create Branded Links</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        Your custom domain is now ready to use! When generating a new short link:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-500 dark:text-[#888] mb-12">
        <li>Go to the <strong>Create short URL</strong> page.</li>
        <li>Paste your long destination URL.</li>
        <li>Open the <strong>Advanced Settings</strong> accordion.</li>
        <li>In the <strong>Domain</strong> dropdown, select your newly added custom domain instead of the default domain.</li>
        <li>Click Save. Your link is now completely branded (e.g., <code className="text-black dark:text-white">https://link.yourbrand.com/promo</code>).</li>
      </ol>

      <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-[#333] pb-2 mb-6">How Routing Works (Under the Hood)</h2>
      <p className="text-gray-500 dark:text-[#888] leading-relaxed mb-6">
        OpenShort achieves multi-tenant domain mapping using Next.js <code className="bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-[#ccc] px-1.5 py-0.5 rounded text-sm">middleware.ts</code>.
      </p>
      <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] rounded-lg p-6 font-mono text-sm text-gray-700 dark:text-[#ccc] overflow-x-auto mb-6">
        <p className="text-gray-400 dark:text-[#666] mb-2">// Flow of a custom domain request:</p>
        <p>1. User clicks: <span className="text-pink-400">https://link.brand.com/summer24</span></p>
        <p>2. Cloudflare receives request and forwards to your VPS IP.</p>
        <p>3. Nginx (on VPS) forwards request to OpenShort running on <span className="text-blue-400">localhost:3000</span>.</p>
        <p>4. Next.js Middleware reads the <span className="text-yellow-400">Host</span> header (<span className="text-black dark:text-white">link.brand.com</span>).</p>
        <p>5. Middleware looks up the domain in SQLite. If valid, it redirects <span className="text-green-400">/summer24</span> to the long URL.</p>
      </div>
    </div>
  );
}
