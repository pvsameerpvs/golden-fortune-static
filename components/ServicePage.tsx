"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicePageProps {
  title: string;
  subtitle?: string;
  description: string | string[];
  advantagesTitle?: string;
  advantages?: string[];
  sections?: {
    title: string;
    content?: string | string[];
    list?: string[];
  }[];
  hallmarksTitle?: string;
  hallmarks?: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
}

const ServicePage = ({
  title,
  subtitle,
  description,
  advantagesTitle = "Key Advantages",
  advantages,
  sections,
  hallmarksTitle = "Our Service Hallmarks",
  hallmarks,
  heroImage = "/images/mainland.png"
}: ServicePageProps) => {
  return (
    <div className="bg-[#030303] text-white min-h-screen pb-32">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-40 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
           >
              <Link href="/" className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-8 hover:gap-4 transition-all">
                <ArrowLeft size={14} /> Back to Hub
              </Link>
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 3 === 2 ? "text-gradient-gold" : ""}>{word} </span>
                ))}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
           </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-20">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-xl max-w-none"
            >
              <div className="text-gray-400 text-lg leading-relaxed space-y-8 font-light">
                {Array.isArray(description) ? (
                  description.map((p, i) => <p key={i} className="first-letter:text-4xl first-letter:font-black first-letter:text-gold first-letter:mr-2">{p}</p>)
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </motion.section>

            {sections && sections.map((section, idx) => (
              <motion.section 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gold"></div>
                  <h2 className="text-2xl md:text-4xl font-black text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content && (
                    <div className="text-gray-400 text-lg leading-relaxed font-light">
                      {Array.isArray(section.content) ? (
                        section.content.map((p, i) => <p key={i} className="mb-4">{p}</p>)
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  )}
                  
                  {section.list && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.list.map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-gold/30 transition-all group">
                          <CheckCircle2 className="text-gold w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-300 font-medium text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            ))}

            {hallmarks && (
              <section className="space-y-12">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-black text-white">{hallmarksTitle}</h2>
                  <div className="w-16 h-1 bg-gold mt-4 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {hallmarks.map((hallmark, idx) => (
                    <div key={idx} className="glass-card p-10 rounded-3xl space-y-4">
                      <h4 className="text-xl font-bold text-gold">{hallmark.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed text-sm">{hallmark.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {advantages && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-card-bg/40 backdrop-blur-2xl p-10 rounded-[32px] border border-gold/10 shadow-2xl space-y-10"
                >
                  <h3 className="text-2xl font-black text-white border-b border-white/5 pb-6">{advantagesTitle}</h3>
                  <ul className="space-y-6">
                    {advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <div className="bg-gold/10 p-1.5 rounded-lg group-hover:bg-gold/20 transition-colors">
                          <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                        </div>
                        <span className="text-gray-400 font-medium text-sm leading-relaxed">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6">
                    <Link href="/#contact" className="btn-premium w-full flex items-center justify-center gap-3">
                      Register Your Interest <ArrowRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Call to Action Mini */}
              <div className="glass p-8 rounded-[32px] border border-gold/5 space-y-4">
                 <h4 className="text-white font-bold">Expert Consultation</h4>
                 <p className="text-gray-500 text-xs font-light">Discuss your business vision with our elite banking-background consultants.</p>
                 <a href="tel:+971527069469" className="text-gold text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest">
                   Call +971 527069469 <ArrowRight size={14} />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
