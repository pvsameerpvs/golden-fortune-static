"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Mainland Company',
      links: [
        { name: 'Overview', href: '/mainland-company-formation-in-dubai' },
        { name: 'LLC Formation', href: '/llc-company-formation-in-dubai' },
        { name: 'Professional License', href: '/professional-license-main-land-civil-company' },
        { name: 'Branch Office', href: '/branch-representative-office-in-main-land' },
      ]
    },
    {
      title: 'Free Zone Company',
      links: [
        { name: 'Overview', href: '/dubai-free-zone-company-overview' },
        { name: 'IFZA Dubai', href: '/ifza-dubai-business-set-up' },
        { name: 'DMCC Dubai', href: '/dmcc-free-zone-company-setup' },
        { name: 'Shams Sharjah', href: '/sharjah-media-city-free-zone-business-setup' },
        { name: 'DAFZA Dubai', href: '/business-setup-in-dafza' },
        { name: 'JAFZA Dubai', href: '/jafza-company-formation' },
        { name: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
        { name: 'Ajman Media City', href: '/ajman-media-city' },
        { name: 'Meydan Free Zone', href: '/meydan-free-zone' },
        { name: 'Dubai Media City', href: '/dubai-media-city-business-set-up' },
        { name: 'Hamriyah Free Zone', href: '/hamriyah-free-zone-company-setup' },
        { name: 'Fujairah Free Zone', href: '/fujairah-free-zone-company-formation' },
        { name: 'RAKEZ Ras Al Khaimah', href: '/rakez-company-formation' },
        { name: 'Dubai South', href: '/dubai-south-free-zone-business-setup' },
        { name: 'SAIF Zone', href: '/saif-zone-business-setup' },
        { name: 'DWTC Dubai', href: '/dwtc-free-zone-company-formation' },
      ]
    },
    {
      title: 'Offshore Company',
      links: [
        { name: 'Overview', href: '/offshore-company-formation-in-dubai' },
        { name: 'RAK Offshore', href: '/rak-offshore-company-formation' },
        { name: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
        { name: 'Ajman Offshore', href: '/ajman-offshore-company-setup' },
      ]
    }
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0ae6] backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient-gold">
              GOLDEN FORTUNE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-sm font-medium nav-link py-8">
                  {item.title} <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute left-0 mt-0 w-64 bg-card-bg border border-gold/20 shadow-2xl rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-gold hover:text-black transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/#contact" className="btn-gold text-sm self-center">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gold"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card-bg border-b border-gold/10 h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                <div className="text-gold font-semibold px-3 py-2 text-lg border-b border-gold/10 mb-2">
                  {item.title}
                </div>
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-2 text-base text-gray-300 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-gold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
