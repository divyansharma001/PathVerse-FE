import React from 'react';
import { IconBrandInstagram, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PathVest</h3>
            <p className="text-sm">Empowering your financial journey with smart investments and expert guidance.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-white transition-colors">
                <IconBrandInstagram size={24} />
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                <IconBrandYoutube size={24} />
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                <IconBrandX size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; 2024 PathVest. All Rights Reserved.
          </div>
          <div className="text-sm mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition-colors mr-4">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;