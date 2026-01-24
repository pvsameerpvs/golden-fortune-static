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
    <section className="section-padding bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -ml-32 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="text-gold flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black text-black tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-gray-400 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  {stat.label}
                </div>
                <div className="w-8 h-1 bg-gold/30 mx-auto rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Stats;
