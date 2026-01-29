"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, PhoneCall } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Ahmed Al Mansoori",
      role: "Managing Director",
      image: "/images/team-member-1.png",
      bio: "With over 20 years of experience in UAE banking and corporate strategy, Ahmed leads the firm with a vision of excellence and precision.",
      contact: "ahmed@goldenlegacy.ae"
    },
    {
      name: "Sarah Jenkins",
      role: "Strategic Advisor",
      image: "/images/team-member-2.png",
      bio: "Sarah specializes in complex free zone setups and offshore structures, providing tailored solutions for international investors.",
      contact: "sarah@goldenlegacy.ae"
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Head",
      image: "/images/team-member-3.png",
      bio: "Elena ensures seamless execution of all administrative and licensing processes, maintaining our commitment to 100% compliance.",
      contact: "elena@goldenlegacy.ae"
    }
  ];

  return (
    <section className="section-padding bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-gold font-black tracking-[0.4em] uppercase text-xs">Our Experts</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">The Minds Behind <br /><span className="text-gradient-gold">Your Success</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[450px] rounded-[48px] overflow-hidden border border-white/5 group-hover:border-gold/30 transition-all duration-700 bg-[#0a0a0a]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay with info on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-black text-white mb-1">{member.name}</h4>
                      <p className="text-gold font-bold uppercase tracking-widest text-xs">{member.role}</p>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {member.bio}
                    </p>

                    <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      <a href={`mailto:${member.contact}`} className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                        <Mail size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
