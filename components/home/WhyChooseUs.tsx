"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, BarChart3, Target, Zap, Landmark } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { title: "Ethical Integrity", desc: "No hidden fees. Full transparency in every document and government fee.", icon: <Shield /> },
    { title: "Market Insights", desc: "Access twenty years of data and trends in the UAE business landscape.", icon: <BarChart3 /> },
    { title: "Govt Networking", desc: "Direct connections and optimized procedures with local authorities.", icon: <Target /> },
    { title: "Custom Solutions", desc: "Bespoke setup packages tailored to your specific industry needs.", icon: <Zap /> },
    { title: "Banking Support", desc: "Superior assistance in navigating multi-currency corporate account setups.", icon: <Landmark /> },
    { title: "Fast Tracking", desc: "Efficient procedures that reduce your time-to-market significantly.", icon: <Zap /> },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-32 h-fit">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">The Golden Standard</span>
            <h2 className="text-4xl md:text-5xl font-black">Why Strategic <br />Founders <br /><span className="text-gradient-gold">Choose Us</span></h2>
            <p className="text-gray-400 font-light leading-relaxed">
              We combine deep-rooted banking knowledge with cutting-edge legal expertise to provide a setup process that is as prestigious as it is practical.
            </p>
            <Link href="#contact" className="btn-premium flex items-center justify-center gap-2">
              Consult with Experts <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {points.map((item, idx) => (
              <div key={idx} className="glass p-10 rounded-[32px] group hover:border-gold/50 transition-all">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
