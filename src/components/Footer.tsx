
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/981d3653-41bf-4379-847b-f87f6bf2e468.png" 
                alt="TechFlow Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                TechFlow
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for innovative technology solutions in Zimbabwe. 
              We transform businesses through cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">IT Consultant</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Network Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Cloud Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">IT Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  26 Dieppe Avenue,<br />
                  New Cranborne Park,<br />
                  Harare, Zimbabwe
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+2638677211025</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">sales@techflow.co.zw</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechFlow. All rights reserved. Designed with ❤️ for innovation.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
