import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white relative overflow-hidden">
      {/* Background decoration with 2026 theme */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* 2026 greeting banner */}
        <motion.div 
          className="text-center mb-8 pb-8 border-b border-white/20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3">
            <Sparkles className="text-accent animate-pulse" size={24} />
            <span className="text-2xl font-bold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Welcome to 2026 — Innovating Together!
            </span>
            <Sparkles className="text-accent animate-pulse" size={24} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/981d3653-41bf-4379-847b-f87f6bf2e468.png" 
                alt="TechFlow Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-foreground to-secondary bg-clip-text text-transparent">
                TechFlow
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for innovative technology solutions in Zimbabwe. 
              We transform businesses through cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-white/60 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact', 'Portfolio', 'Blog'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-accent">Our Services</h4>
            <ul className="space-y-2">
              {['IT Consultant', 'Network Support', 'Software Development', 'Cloud Support', 'Digital Transformation', 'IT Support'].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href="#" className="text-white/80 hover:text-secondary transition-colors duration-300">
                    {service}
                  </a>
                </motion.li>
              ))}
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/starlink" className="text-accent hover:text-accent/80 transition-colors duration-300 font-semibold">
                  🛰️ Starlink Installation
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <motion.div className="flex items-start space-x-3 group" whileHover={{ x: 3 }}>
                <MapPin className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                  26 Dieppe Avenue,<br />
                  New Cranborne Park,<br />
                  Harare, Zimbabwe
                </span>
              </motion.div>
              <motion.div className="flex items-center space-x-3 group" whileHover={{ x: 3 }}>
                <Phone className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">+2638677211025</span>
              </motion.div>
              <motion.a 
                href="https://wa.me/263779822400" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 3 }}
              >
                <MessageCircle className="text-whatsapp flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">WhatsApp: 0779822400</span>
              </motion.a>
              <motion.div className="flex items-center space-x-3 group" whileHover={{ x: 3 }}>
                <Mail className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-white/80 group-hover:text-white transition-colors duration-300">sales@techflow.co.zw</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} TechFlow. All rights reserved. ✨ Building the Future Together
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
