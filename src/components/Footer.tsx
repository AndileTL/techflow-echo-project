import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Facebook } from 'lucide-react';
import logo from '@/assets/techflow-logo.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-brand-magenta/30 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="TechFlow" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-bold">TechFlow Technologies</span>
            </Link>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Smarter technology, faster connectivity, built for Africa. Managed IT,
              cloud, cybersecurity and connectivity solutions from Harare to the region.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/techflow-technologies-zw" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.facebook.com/TechFlowZW" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/263779822400" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/isp-reseller" className="hover:text-white transition-colors">Connectivity</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>13 Audley Street, Carneborne Park, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+2638677211025" className="hover:text-white transition-colors">+263 8677 211 025</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-whatsapp flex-shrink-0" />
                <a href="https://wa.me/263779822400" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp 0779 822 400</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:sales@techflow.co.zw" className="hover:text-white transition-colors">sales@techflow.co.zw</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {year} TechFlow Technologies. All rights reserved.</p>
          <p>Mon–Fri 09:00–18:00 · Sat 08:00–13:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
