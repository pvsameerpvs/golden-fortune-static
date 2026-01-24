"use client";

import React from 'react';
import { Landmark, Building2, Globe2, BadgeCheck } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-[#050505] py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
         <div className="flex items-center gap-2 text-white font-bold text-xl"><Landmark className="text-gold" /> DED Licensed</div>
         <div className="flex items-center gap-2 text-white font-bold text-xl"><Building2 className="text-gold" /> Freezone Partner</div>
         <div className="flex items-center gap-2 text-white font-bold text-xl"><Globe2 className="text-gold" /> Global Network</div>
         <div className="flex items-center gap-2 text-white font-bold text-xl"><BadgeCheck className="text-gold" /> ISO Certified</div>
      </div>
    </div>
  );
};

export default TrustBadges;
