"use client";

import React from 'react';
import { BarChart3, Landmark, Users, BadgeCheck } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { label: "Successful Setups", val: "1000+", icon: <BarChart3 /> },
    { label: "Banking Expertise", val: "20+", icon: <Landmark /> },
    { label: "Global Network", val: "150+", icon: <Users /> },
    { label: "Compliance Rate", val: "100%", icon: <BadgeCheck /> },
  ];

  return (
    <section className="section-padding bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-gold flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-black text-white">{stat.val}</div>
                <div className="text-gray-500 font-bold tracking-widest uppercase text-[10px]">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default AboutStats;
