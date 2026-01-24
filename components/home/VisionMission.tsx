"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="relative py-32 overflow-hidden">
       <div className="absolute inset-0 bg-gold/[0.02] -skew-y-3 origin-left"></div>
       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card-bg/50 backdrop-blur-xl p-12 rounded-[40px] border border-gold/10 relative group hover:border-gold/30 transition-all"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                <Target size={40} className="text-gold" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                "To leverage our elite banking experience to facilitate the seamless creation of new companies in the UAE, equipping them with every tool required to thrive in a global economy."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card-bg/50 backdrop-blur-xl p-12 rounded-[40px] border border-gold/10 relative group hover:border-gold/30 transition-all"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform">
                <Eye size={40} className="text-gold" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                "To provide expert guidance and unshakeable support as we empower entrepreneurs to transform their dreams into thriving UAE business realities."
              </p>
            </motion.div>
         </div>
       </div>
    </section>
  );
};

export default VisionMission;
