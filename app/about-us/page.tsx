"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Target, Eye, Landmark, BadgeCheck, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/office.png"
            alt="Golden Legacy Office"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#030303]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Our <span className="text-gradient-gold">Golden</span> Legacy
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Founded on two decades of elite banking expertise, navigating the corporate landscape of Dubai with precision and prestige.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Who We Are</span>
                <h2 className="text-4xl font-black">Elite Expertise in the <br /><span className="text-gradient-gold">Heart of Dubai</span></h2>
                <div className="w-12 h-1 bg-gold rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Golden Legacy Corporate Services Provider is strategically located in Sheikh Zayed, directly opposite the iconic Museum of the Future. This prime location mirrors our forward-thinking approach to business setup.
                </p>
                <p>
                  Our founders and core team bring an extensive background from the UAE's premier banking sector. For over twenty years, we have managed complex financial portfolios and corporate structures for high-net-worth individuals and international enterprises.
                </p>
                <p>
                  This unique financial heritage allows us to offer more than just administrative assistance. We provide strategic insight that ensures your company isn't just registered—it's structurally sound for banking, growth, and long-term success.
                </p>
              </div>

              <div className="flex gap-4">
                 <Link href="/#contact" className="btn-premium">Partner With Us</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gold/20 glass">
                <Image 
                  src="/images/team.png" 
                  alt="Executive Team" 
                  width={600} 
                  height={800}
                  className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20">
          <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">The Golden Standard</h2>
          <h3 className="text-4xl md:text-5xl font-black">Our Core <span className="text-gradient-gold">Principles</span></h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Ethical Integrity",
              desc: "Transparent practices with zero hidden costs. We believe in building trust through total disclosure and fair pricing.",
              icon: <Shield className="w-10 h-10 text-gold" />
            },
            {
              title: "Precision Execution",
              desc: "Leveraging two decades of banking precision to ensure every document and procedure is perfectly compliant.",
              icon: <Target className="w-10 h-10 text-gold" />
            },
            {
              title: "Client-Centricity",
              desc: "Your success is our reputation. We provide bespoke solutions that cater to your specific business vision and industry.",
              icon: <Users className="w-10 h-10 text-gold" />
            }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[40px] border border-gold/10 hover:border-gold/40 transition-all group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform origin-left">{val.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-4">{val.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section id="mission" className="section-padding bg-[#030303]">
        <div className="max-width-7xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12">
              <div className="glass-card p-16 rounded-[48px] border border-gold/10 space-y-8">
                 <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                    <Eye className="text-gold w-8 h-8" />
                 </div>
                 <h3 className="text-4xl font-black text-white">Our Vision</h3>
                 <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                   "To bridge the gap between global ambition and local success by creating a seamless corridor for businesses to flourish in the UAE."
                 </p>
              </div>
              <div className="glass-card p-16 rounded-[48px] border border-gold/10 space-y-8">
                 <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                    <Landmark className="text-gold w-8 h-8" />
                 </div>
                 <h3 className="text-4xl font-black text-white">Our Mission</h3>
                 <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                   "Leveraging professional expertise to equip entrepreneurs with strategic corporate tools, bank-ready structures, and elite advisory."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Hallmark Banner */}
      <section className="section-padding bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Successful Setups", val: "1000+", icon: <BarChart3 /> },
                { label: "Banking Expertise", val: "20+", icon: <Landmark /> },
                { label: "Global Network", val: "150+", icon: <Users /> },
                { label: "Compliance Rate", val: "100%", icon: <BadgeCheck /> },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-gold flex justify-center">{stat.icon}</div>
                  <div className="text-5xl font-black text-white">{stat.val}</div>
                  <div className="text-gray-500 font-bold tracking-widest uppercase text-[10px]">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <h2 className="text-4xl md:text-6xl font-black">Experience the <br /><span className="text-gradient-gold">Golden Legacy</span> Journey</h2>
           <p className="text-xl text-gray-400 font-light leading-relaxed">
             Join the ranks of successful international businesses that started their UAE journey with us.
           </p>
           <div className="flex justify-center">
              <Link href="/#contact" className="btn-premium flex items-center gap-4">
                Get a Free Consultation <ArrowRight />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
