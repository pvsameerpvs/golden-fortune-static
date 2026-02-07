"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] rounded-full -mr-40"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4 items-end">
              {/* Main Team Image */}
              <div className="col-span-12 relative rounded-[40px] overflow-hidden border border-gold/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group h-[500px]">
                <Image 
                  src="/images/team-office.png" 
                  alt="Golden Legacy Expert Team" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-8 left-8 px-6 py-3 glass border border-gold/30 rounded-2xl z-30">
                   <div className="flex items-center gap-3">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                     </span>
                     <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Live Advisory Team</span>
                   </div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="col-span-6 -mt-32 ml-10 relative z-20 rounded-[32px] overflow-hidden border border-gold/40 shadow-2xl h-64 group/item">
                <Image 
                  src="/images/about-legacy.png" 
                  alt="Premium Banking Excellence" 
                  fill
                  className="object-cover group-hover/item:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-6 glass p-10 rounded-[40px] border border-gold/30 z-30 shadow-2xl backdrop-blur-3xl">
              <div className="text-6xl font-black text-gold mb-2 tracking-tighter">20+</div>
              <div className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] leading-relaxed">
                Elite Banking <br />
                <span className="text-white">Heritage</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl font-black">Two Decades of <br /><span className="text-gradient-gold">Unmatched Excellence</span></h2>
              <div className="w-12 h-1 bg-gold rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Golden Legacy Corporate Services Provider, strategically located at the heart of Dubai - Sheikh Zayed Road, is more than just a consultancy. We are your dedicated growth partners in the UAE.
              </p>
              <p>
                Our foundation is built on extensive experience in the elite banking sector. For over twenty years, our team has navigated the complex financial landscapes of Dubai, serving high-net-worth individuals and corporate giants.
              </p>
              <p>
                We don't just set up companies; we equip them with the tools for perpetual success—from seamless bank account openings to full regulatory compliance with the highest level of efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2"><CheckCircle2 className="text-gold w-5 h-5" /> Elite Banking Tips</h4>
                <p className="text-gray-500 text-sm">Optimizing your financial structure from day one.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold flex items-center gap-2"><CheckCircle2 className="text-gold w-5 h-5" /> 100% Compliance</h4>
                <p className="text-gray-500 text-sm">Meeting every government policy with precision.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
