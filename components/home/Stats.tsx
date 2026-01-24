"use client";

import React from 'react';
import { Briefcase, Users, BarChart3, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Successful Setups", val: "1000+", icon: <Briefcase /> },
    { label: "Expert Advisors", val: "25+", icon: <Users /> },
    { label: "License Categories", val: "2000+", icon: <BarChart3 /> },
    { label: "Client Satisfaction", val: "100%", icon: <Award /> },
  ];

  return (
    <section className="section-padding bg-[#030303] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-gold flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-black text-white">{stat.val}</div>
                <div className="text-gray-500 font-bold tracking-widest uppercase text-xs">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Stats;
