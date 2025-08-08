// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const linkSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Partner with Us', href: '/partner' },
      ],
    },
    {
      title: 'For Customers',
      links: [
        { label: 'My Orders', href: '/orders' },
        { label: 'Track Order', href: '/track' },
        { label: 'Help & Support', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/tos' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Refund Policy', href: '/refund' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">FoodDash</h2>
            <p className="text-sm text-slate-400">
              Your favorite meals delivered fast & fresh.
            </p>
            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-orange-500 flex items-center justify-center transition"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-orange-400 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-slate-700 my-8" />

        {/* Bottom line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} FoodDash. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ &nbsp;by the FoodDash team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;