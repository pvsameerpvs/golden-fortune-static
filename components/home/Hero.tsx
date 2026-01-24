"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Dubai Skyline"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#030303]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-4 animate-float">
            Premium Corporate Services in UAE
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1]">
            Architecting Your <br />
            <span className="text-gradient-gold">Business Empire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Strategic business setup solutions tailored for visionary entrepreneurs and global corporations in the heart of the Emirates.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link href="/mainland-company-formation-in-dubai" className="btn-premium shine group">
              Establish Now <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="btn-outline-gold group">
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Explore More</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
