"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-100 md:scale-105"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
        </video>
        {/* Lighter, more sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]"></div>
        
        {/* Subtle light leak effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full opacity-20 -ml-48 -mb-48"></div>
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Spacer for top/center balance */}
        <div className="flex-1" />

        {/* Main Content (Centered) */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 glass rounded-full border border-gold/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                Premier Business Advisory
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 leading-[0.95] tracking-tighter text-white">
              BUILDING <br />
              <span className="text-gradient-gold">LEGACIES</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Strategic business setup solutions tailored for <span className="text-white font-medium">visionary entrepreneurs</span> in the heart of the Emirates.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section (Centered via Flex) */}
        <div className="flex-1 flex flex-col justify-end pb-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="hidden xl:block">
              <Link href="/cost-calculator" className="btn-premium !px-8 !py-3 !text-xs !rounded-full uppercase tracking-[0.2em] font-black">
                Calculate Setup Cost
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase font-bold">Scroll to Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-gold/40 via-gold/5 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
