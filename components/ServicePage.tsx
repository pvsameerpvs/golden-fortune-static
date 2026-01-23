import React, { ReactNode } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
}

const ServicePage = ({
  title,
  subtitle,
  description,
  advantagesTitle = "Advantages",
  advantages,
  sections,
  hallmarksTitle = "Golden Hallmarks",
  hallmarks
}: ServicePageProps) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 bg-[#0a0a0a] border-b border-gold/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-4xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-invert prose-gold max-w-none">
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                {Array.isArray(description) ? (
                  description.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </section>

            {sections && sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-3xl font-bold text-gold border-l-4 border-gold pl-6">{section.title}</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  {Array.isArray(section.content) ? (
                    section.content.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-gold w-5 h-5 shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {hallmarks && (
              <section className="space-y-10 pt-12">
                <h2 className="text-3xl font-bold text-gold text-center">{hallmarksTitle}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {hallmarks.map((hallmark, idx) => (
                    <div key={idx} className="bg-card-bg p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all">
                      <h4 className="text-xl font-bold text-gold mb-3">{hallmark.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{hallmark.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {advantages && (
              <div className="bg-card-bg p-8 rounded-2xl border border-gold/10 sticky top-28">
                <h3 className="text-2xl font-bold text-gold mb-8">{advantagesTitle}</h3>
                <ul className="space-y-5">
                  {advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="bg-gold/10 p-1 rounded-full group-hover:bg-gold/20 transition-colors">
                        <CheckCircle2 className="text-gold w-5 h-5 shrink-0" />
                      </div>
                      <span className="text-gray-300 font-medium">{advantage}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 bg-black/40 p-6 rounded-xl border border-gold/5">
                  <h4 className="text-xl font-bold mb-4">Ready to start?</h4>
                  <p className="text-gray-400 text-sm mb-6">Connect with our experts today for a free consultation.</p>
                  <Link href="#contact" className="btn-gold w-full text-center flex items-center justify-center gap-2">
                    Connect with an Expert <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
