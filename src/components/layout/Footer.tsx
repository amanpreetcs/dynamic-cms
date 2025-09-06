interface NavLink {
  href: string;
  label: string;
}

const quickLinks: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#documentation", label: "Documentation" },
  { href: "#api", label: "API Reference" },
  { href: "#support", label: "Support" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Dynamic Platform</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A modern dynamic content management system built with Next.js and
              TypeScript, demonstrating industry best practices for performance
              and scalability.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="space-y-2 text-gray-300 not-italic">
              <div>
                <a
                  href="mailto:info@dynamicplatform.com"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                >
                  info@dynamicplatform.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                ></a>
              </div>
              <div>123 Tech Street, Innovation City</div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Dynamic Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
