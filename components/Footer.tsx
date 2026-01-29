"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#030303] pt-20 md:pt-32 lg:pt-40 pb-12 relative overflow-hidden">
      {/* Decorative Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[150px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
             <Link href="/" className="group flex items-center gap-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all group-hover:border-gold/30">
                <Image 
                  src="/fevic.png" 
                  alt="Golden Legacy Logo" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
                  GOLDEN <span className="text-gold">LEGACY</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-gray-300 transition-colors">
                  Corporate Services Provider
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              The premier business gateway to the UAE. Leveraging two decades of elite banking expertise to architect your corporate future in Dubai and beyond.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Quick Access</h4>
            <ul className="space-y-5 text-gray-500 font-medium">
              <li><Link href="/mainland-company-formation-in-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Mainland Setup <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/dubai-free-zone-company-overview" className="hover:text-gold transition-colors flex items-center gap-2 group">Free Zone Centers <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/offshore-company-formation-in-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Offshore Solutions <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/bank-account-opening-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Banking Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/pro-services-dubai" className="hover:text-gold transition-colors flex items-center gap-2 group">Value Added Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/about-us" className="hover:text-gold transition-colors flex items-center gap-2 group">About Golden Legacy <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-2 group">Contact Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-10">Headquarters</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Visit Our Office</p>
                  <p className="text-gray-500 leading-relaxed font-light">located at the heart of Dubai - Sheikh Zayed Road</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Direct Lines</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971527069469" className="text-gray-500 hover:text-gold transition-colors">+971 527069469</a>
                    <a href="tel:+97144569557" className="text-gray-500 hover:text-gold transition-colors">+971 44569557 (Landline)</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Email Inquiry</p>
                  <Link href="/contact" className="text-gray-500 hover:text-gold transition-colors italic">Send Secure Message</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="space-y-2 text-center md:text-left">
              <p className="text-gray-600 text-[10px] font-black tracking-[0.3em] uppercase">
                © {new Date().getFullYear()} GOLDEN LEGACY CORPORATE SERVICES
              </p>
              <p className="text-gray-800 text-[9px] font-bold tracking-[0.2em] uppercase">
                Excellence Personified. UAE Licensed Provider.
              </p>
           </div>
           
           <div className="flex gap-10">
              <Link href="#" className="text-gray-600 hover:text-gold text-[10px] font-black tracking-widest uppercase transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-600 hover:text-gold text-[10px] font-black tracking-widest uppercase transition-colors">Terms of Service</Link>
           </div>

           <button 
             onClick={scrollToTop}
             className="group flex items-center gap-4 text-gray-500 hover:text-gold transition-all duration-500"
           >
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Top</span>
             <div className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500 rotate-45 group-hover:rotate-0">
               <ArrowUpRight size={18} className="-rotate-45" />
             </div>
           </button>
        </div>       
      </div>
    </footer>
  );
};

export default Footer;
