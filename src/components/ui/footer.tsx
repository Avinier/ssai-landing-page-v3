"use client";

import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "AI", href: "/ai" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Fluid Compute", href: "/fluid" },
        { name: "Next.js", href: "/solutions/nextjs" },
        { name: "Observability", href: "/products/observability" },
        { name: "Previews", href: "/products/previews" },
        { name: "Rendering", href: "/products/rendering" },
        { name: "Security", href: "/security" },
        { name: "Turbo", href: "/solutions/turborepo" },
        { name: "v0", href: "https://v0.dev/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Community", href: "https://vercel.community/" },
        { name: "Docs", href: "/docs" },
        { name: "Guides", href: "/guides" },
        { name: "Help", href: "/help" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing", href: "/pricing" },
        { name: "Resources", href: "/resources" },
        { name: "Solution Partners", href: "/partners/solution-partners" },
        { name: "Templates", href: "/templates" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Changelog", href: "/changelog" },
        { name: "Contact Us", href: "/contact" },
        { name: "Customers", href: "/customers" },
        { name: "Partners", href: "/partners" },
        { name: "Privacy Policy", href: "/legal/privacy-policy" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/vercel" },
        { name: "LinkedIn", href: "https://linkedin.com/company/vercel" },
        { name: "Twitter", href: "https://x.com/vercel" },
        { name: "YouTube", href: "https://youtube.com/@VercelHQ" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-sm mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/" className="mb-4 md:mb-0">
            <svg
              height="20"
              viewBox="0 0 76 65"
              fill="currentColor"
              className="text-black"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
            </svg>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://vercel-status.com"
              className="text-xs text-gray-600 hover:text-gray-900"
            >
              All systems normal
            </a>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Select a display theme:</span>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button className="px-2 py-1 text-xs bg-gray-100 text-gray-800">
                  system
                </button>
                <button className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-50">
                  light
                </button>
                <button className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-50">
                  dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
