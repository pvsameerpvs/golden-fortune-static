"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Landmark, Globe2, Building2, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Mainland',
      icon: <Landmark className="w-4 h-4" />,
      links: [
        { name: 'Overview', href: '/mainland-company-formation-in-dubai' },
        { name: 'LLC Formation', href: '/llc-company-formation-in-dubai' },
        { name: 'Professional License', href: '/professional-license-main-land-civil-company' },
        { name: 'Branch Office', href: '/branch-representative-office-in-main-land' },
      ]
    },
    {
      title: 'Free Zone',
      icon: <Building2 className="w-4 h-4" />,
      links: [
        { name: 'Overview', href: '/dubai-free-zone-company-overview' },
        { name: 'IFZA Dubai', href: '/ifza-dubai-business-set-up' },
        { name: 'DMCC Dubai', href: '/dmcc-free-zone-company-setup' },
        { name: 'Shams Sharjah', href: '/sharjah-media-city-free-zone-business-setup' },
        { name: 'DAFZA Dubai', href: '/business-setup-in-dafza' },
        { name: 'JAFZA Dubai', href: '/jafza-company-formation' },
        { name: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
        { name: 'Meydan Free Zone', href: '/meydan-free-zone' },
        { name: 'Dubai Media City', href: '/dubai-media-city-business-set-up' },
        { name: 'Fujairah Free Zone', href: '/fujairah-free-zone-company-formation' },
        { name: 'RAKEZ RAK', href: '/rakez-company-formation' },
        { name: 'Dubai South', href: '/dubai-south-free-zone-business-setup' },
      ]
    },
    {
      title: 'Offshore',
      icon: <Globe2 className="w-4 h-4" />,
      links: [
        { name: 'Overview', href: '/offshore-company-formation-in-dubai' },
        { name: 'RAK Offshore', href: '/rak-offshore-company-formation' },
        { name: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
        { name: 'Ajman Offshore', href: '/ajman-offshore-company-setup' },
      ]
    },
    {
      title: 'Company',
      icon: <Users className="w-4 h-4" />,
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Mission', href: '/about-us#mission' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500`}>
        <div className={`relative flex justify-between items-center px-6 rounded-full border transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl h-16' : 'bg-transparent border-transparent h-20'}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
                GOLDEN <span className="text-gold">LEGACY</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold -mt-1 group-hover:text-gray-300 transition-colors">
                Corporate Services
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all hover:bg-white/5 ${activeDropdown === item.title ? 'text-gold' : 'text-gray-400 hover:text-white'}`}>
                  {item.icon}
                  {item.title} 
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-72 bg-[#0a0a0ae6] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden py-3"
                    >
                      <div className="px-4 py-2 border-b border-white/5 mb-2">
                         <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Solutions for {item.title}</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1 px-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 text-sm rounded-xl text-gray-400 hover:bg-gold hover:text-black transition-all group/item"
                          >
                            <span className="font-medium">{link.name}</span>
                            <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all font-bold" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <div className="pl-6 ml-6 border-l border-white/10 hidden xl:block">
               <Link href="/contact" className="btn-premium !px-6 !py-2 !text-xs !rounded-xl">
                 GET STARTED
               </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-gold transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] lg:hidden bg-black/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 text-gray-400"
              >
                <X size={32} />
              </button>

              <div className="space-y-12">
                {menuItems.map((item) => (
                  <div key={item.title} className="space-y-6">
                    <div className="flex items-center gap-3 text-gold font-black text-2xl uppercase tracking-widest border-l-4 border-gold pl-6">
                      {item.icon}
                      {item.title}
                    </div>
                    <div className="grid grid-cols-1 gap-4 pl-6">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-400 hover:text-white text-xl font-light transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-16">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-premium w-full text-center text-xl py-5"
                >
                  CONTACT OUR EXPERTS
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default Navbar;
