import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient-gold">GOLDEN FORTUNE</h3>
            <p className="text-gray-400 leading-relaxed">
              We provide expert guidance and support to entrepreneurs as they seek to achieve their dream of starting/expanding their business in United Arab Emirates.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/mainland-company-formation-in-dubai" className="hover:text-gold transition-colors">Mainland Setup</a></li>
              <li><a href="/dubai-free-zone-company-overview" className="hover:text-gold transition-colors">Free Zone Setup</a></li>
              <li><a href="/offshore-company-formation-in-dubai" className="hover:text-gold transition-colors">Offshore Setup</a></li>
              <li><a href="/ifza-dubai-business-set-up" className="hover:text-gold transition-colors">IFZA Dubai</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold w-5 h-5 shrink-0 mt-1" />
                <span>Sheikh Zayed, Opposite Future Museum, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-5 h-5" />
                <a href="tel:+971527069469" className="hover:text-gold">+971 527069469</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-5 h-5" />
                <a href="tel:+97144569557" className="hover:text-gold">+971 44569557 (Landline)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold w-5 h-5" />
                <a href="mailto:info@goldenfortune.ae" className="hover:text-gold">info@goldenfortune.ae</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Clock className="text-gold w-5 h-5" />
                <span>Mon - Sat: 9:30 - 18:30</span>
              </li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Golden Fortune Corporate Services Provider. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
