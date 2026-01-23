import React from 'react';
import Image from 'next/image';
import { Target, Eye, Award, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Dubai Office"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Empowering Your <span className="text-gradient-gold">Business Vision</span> in Dubai
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Golden Fortune Corporate Services Provider - Your gateway to seamless company formation and business success in the heart of UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/mainland-company-formation-in-dubai" className="btn-gold">
                Explore Services
              </Link>
              <Link href="#contact" className="px-6 py-3 border border-gold text-gold font-semibold rounded-md hover:bg-gold hover:text-black transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">About Us</h2>
              <h3 className="text-4xl font-bold mb-8 italic">One of the best consultants in Dubai, UAE.</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Golden Fortune Corporate Services Provider is located in Sheikh Zayed, Opposite Future Museum, Dubai, UAE. We provide seamless services to clients by optimizing the expertise of our team, systems, and procedures.
                </p>
                <p>
                  As a business setup consultant in Dubai, we work with entrepreneurs by equipping their start-up businesses with everything they need to meet government policies, have a fully operational bank account, and set themselves on a path of success with the highest level of efficiency and compliance.
                </p>
                <p>
                  The founders and the team have an extensive experience in the banking sector, dealing with individual and corporate clients for more than two decades.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card-bg p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex flex-col items-center text-center">
                <Award className="w-12 h-12 text-gold mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">20+</h4>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="bg-card-bg p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-gold mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">1000+</h4>
                <p className="text-gray-500 text-sm">Satisfied Clients</p>
              </div>
              <div className="bg-card-bg p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-gold mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                <p className="text-gray-500 text-sm">Compliance</p>
              </div>
              <div className="bg-card-bg p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex flex-col items-center text-center">
                <Zap className="w-12 h-12 text-gold mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Fast</h4>
                <p className="text-gray-500 text-sm">Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card-bg p-12 rounded-2xl border border-gold/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={160} />
              </div>
              <Target className="text-gold w-16 h-16 mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                To leverage our experience and team capability to facilitate the seamless creation of new companies in the UAE while also helping such companies acquire all tools they require to succeed.
              </p>
            </div>
            <div className="bg-card-bg p-12 rounded-2xl border border-gold/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye size={160} />
              </div>
              <Eye className="text-gold w-16 h-16 mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                To provide expert guidance and support to entrepreneurs as they seek to achieve their dream of starting/expanding their business in United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Why Golden Fortune?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Partner with an Ethical consultancy that you can trust</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fast and easy business setup", icon: <Zap className="w-8 h-8" /> },
              { title: "Affordable top-notch services", icon: <Award className="w-8 h-8" /> },
              { title: "Experienced team of experts", icon: <Users className="w-8 h-8" /> },
              { title: "Customized business solutions", icon: <Shield className="w-8 h-8" /> },
              { title: "Effective govt networking", icon: <Target className="w-8 h-8" /> },
              { title: "Expert Market Insights", icon: <Eye className="w-8 h-8" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-card-bg p-8 rounded-xl border border-gold/10 hover:border-gold/40 transition-all flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
