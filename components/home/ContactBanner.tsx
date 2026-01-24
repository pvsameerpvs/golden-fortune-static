"use client";

import React from 'react';

const ContactBanner = () => {
  return (
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
  );
};

export default ContactBanner;
