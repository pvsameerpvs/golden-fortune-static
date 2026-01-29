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
            <div className="relative rounded-2xl overflow-hidden border border-gold/20">
              <Image 
                src="/images/consultant.png" 
                alt="Expert Consultation" 
                width={600} 
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl border border-gold/30 hidden md:block">
              <div className="text-4xl font-bold text-gold mb-1">20+</div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-tighter">Years of Banking Expertise</div>
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
                Golden Legacy Corporate Services Provider, strategically located opposite the Museum of the Future, is more than just a consultancy. We are your dedicated growth partners in the UAE.
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
