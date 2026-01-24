"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, Users, Shield, Zap, 
  ArrowRight, CheckCircle2, Building2, Globe2, 
  Briefcase, Landmark, BadgeCheck, BarChart3
} from 'lucide-react';

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

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Dubai Skyline"
            fill
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#030303]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 glass rounded-full text-gold text-sm font-bold tracking-widest uppercase mb-4 animate-float">
              Premium Corporate Services in UAE
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1]">
              Architecting Your <br />
              <span className="text-gradient-gold">Business Empire</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Strategic business setup solutions tailored for visionary entrepreneurs and global corporations in the heart of the Emirates.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Link href="/mainland-company-formation-in-dubai" className="btn-premium shine group">
                Establish Now <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#contact" className="btn-outline-gold group">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Explore More</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <div className="bg-[#050505] py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 text-white font-bold text-xl"><Landmark className="text-gold" /> DED Licensed</div>
           <div className="flex items-center gap-2 text-white font-bold text-xl"><Building2 className="text-gold" /> Freezone Partner</div>
           <div className="flex items-center gap-2 text-white font-bold text-xl"><Globe2 className="text-gold" /> Global Network</div>
           <div className="flex items-center gap-2 text-white font-bold text-xl"><BadgeCheck className="text-gold" /> ISO Certified</div>
        </div>
      </div>

      {/* About Section */}
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
                  Our foundation is built on extensive experience in the elite banking sector. For over twenty years, our founders have navigated the complex financial landscapes of Dubai, serving high-net-worth individuals and corporate giants.
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

      {/* Core Services Grid */}
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
            {[
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
            ].map((service, idx) => (
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

      {/* Vision & Mission High Design */}
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

      {/* Stats Section */}
      <section className="section-padding bg-[#030303] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Successful Setups", val: "1000+", icon: <Briefcase /> },
                { label: "Expert Advisors", val: "25+", icon: <Users /> },
                { label: "License Categories", val: "2000+", icon: <BarChart3 /> },
                { label: "Client Satisfaction", val: "100%", icon: <Award /> },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-gold flex justify-center">{stat.icon}</div>
                  <div className="text-5xl font-black text-white">{stat.val}</div>
                  <div className="text-gray-500 font-bold tracking-widest uppercase text-xs">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Golden Legacy with Hallmarks */}
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
              {[
                { title: "Ethical Integrity", desc: "No hidden fees. Full transparency in every document and government fee.", icon: <Shield /> },
                { title: "Market Insights", desc: "Access twenty years of data and trends in the UAE business landscape.", icon: <BarChart3 /> },
                { title: "Govt Networking", desc: "Direct connections and optimized procedures with local authorities.", icon: <Target /> },
                { title: "Custom Solutions", desc: "Bespoke setup packages tailored to your specific industry needs.", icon: <Zap /> },
                { title: "Banking Support", desc: "Superior assistance in navigating multi-currency corporate account setups.", icon: <Landmark /> },
                { title: "Fast Tracking", desc: "Efficient procedures that reduce your time-to-market significantly.", icon: <Zap /> },
              ].map((item, idx) => (
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

      {/* Simple Contact Banner */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gold/20 via-gold/5 to-transparent p-12 md:p-20 rounded-[48px] border border-gold/10 text-center space-y-8">
             <h2 className="text-4xl md:text-6xl font-black">Ready to launch <br />in <span className="text-gradient-gold">Dubai?</span></h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
               Contact our Dubai-based experts today. We are located opposite the Museum of the Future, Sheikh Zayed Road.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+971527069469" className="btn-premium">Call Now</a>
                <a href="mailto:info@goldenlegacy.ae" className="btn-outline-gold">Email Us</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
