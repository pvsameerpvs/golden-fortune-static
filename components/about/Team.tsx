"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Mail, PhoneCall } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-gold font-black tracking-[0.4em] uppercase text-xs">Our Experts</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">The Minds Behind <br /><span className="text-gradient-gold">Your Success</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/team/${member.slug}`}>
                <div className="relative h-[500px] rounded-[32px] overflow-hidden border border-white/5 group-hover:border-gold/30 transition-all duration-700 bg-[#0a0a0a]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Overlay with info on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                        <p className="text-gold/80 font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
                      </div>
                      
                      <p className="text-gray-400 text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-3">
                        {member.bio}
                      </p>

                      <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                        <span className="text-gold text-xs font-bold uppercase tracking-wider border-b border-gold/30 pb-1">View Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

