"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Zap, Globe2, ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CoreServices = () => {
  const services = [
    {
      title: "Mainland Setup",
      desc: "Unlimited trade flexibility across UAE and global markets with onshore licensing.",
      img: "/images/mainland.png",
      link: "/mainland-company-formation-in-dubai",
      icon: <Building2 className="text-gold mb-4" />
    },
    {
      title: "Free Zone Setup",
      desc: "100% foreign ownership and zero taxes in specialized economic clusters.",
      img: "/images/freezone.png",
      link: "/dubai-free-zone-company-overview",
      icon: <Zap className="text-gold mb-4" />
    },
    {
      title: "Offshore Setup",
      desc: "Enhanced privacy, asset protection, and tax optimization for global holding.",
      img: "/images/offshore.png",
      link: "/offshore-company-formation-in-dubai",
      icon: <Globe2 className="text-gold mb-4" />
    }
  ];

  return (
    <section className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black">Choose Your Path to <span className="text-gradient-gold">Success</span></h3>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore our specialized business setup categories designed to meet diverse corporate requirements.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item} className="group glass-card overflow-hidden rounded-3xl">
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex flex-col">
                  {service.icon}
                  <h4 className="text-2xl font-black text-white">{service.title}</h4>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.desc}
                </p>
                <Link href={service.link} className="flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
