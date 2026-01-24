"use client";

import React from 'react';
import { Landmark, Building2, Globe2, BadgeCheck } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="bg-white section-padding border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 transition-all duration-700">
         <div className="flex items-center gap-3 text-black font-black text-xl group cursor-default">
           <Landmark className="text-gold transition-transform group-hover:scale-110" size={28} /> 
           <span className="tracking-tight">DED Licensed</span>
         </div>
         <div className="flex items-center gap-3 text-black font-black text-xl group cursor-default">
           <Building2 className="text-gold transition-transform group-hover:scale-110" size={28} /> 
           <span className="tracking-tight">Freezone Partner</span>
         </div>
         <div className="flex items-center gap-3 text-black font-black text-xl group cursor-default">
           <Globe2 className="text-gold transition-transform group-hover:scale-110" size={28} /> 
           <span className="tracking-tight">Global Network</span>
         </div>
         <div className="flex items-center gap-3 text-black font-black text-xl group cursor-default">
           <BadgeCheck className="text-gold transition-transform group-hover:scale-110" size={28} /> 
           <span className="tracking-tight">ISO Certified</span>
         </div>
      </div>
    </div>
  );
};

export default TrustBadges;
