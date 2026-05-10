import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceLinks = [
    { name: 'Managed IT Services', href: '/service/managed-it-services' },
    { name: 'Cloud & Microsoft 365', href: '/service/cloud-support' },
    { name: 'VoIP Solutions', href: '/service/voip-solutions' },
    { name: 'ISP Reseller & Redundancy', href: '/isp-reseller' },
    { name: 'Network Support', href: '/service/network-support' },
    { name: 'Software Development', href: '/service/software-development' },
    { name: 'IT Support', href: '/service/it-support' },
    { name: 'Starlink Installation', href: '/starlink' },
    { name: 'View All Services', href: '/services' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border">
      {/* Top bar with modern gradient */}
      <div className="bg-gradient-to-r from-brand-navy via-primary to-secondary text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+2638677211025" className="flex items-center space-x-2 hover:text-accent transition-colors duration-300">
              <Phone size={14} />
              <span className="font-medium">+2638677211025</span>
            </a>
            <a href="mailto:sales@techflow.co.zw" className="hidden sm:flex items-center space-x-2 hover:text-accent transition-colors duration-300">
              <Mail size={14} />
              <span className="font-medium">sales@techflow.co.zw</span>
            </a>
          </div>
          <a 
            href="https://wa.me/263779822400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-whatsapp/20 hover:bg-whatsapp/30 px-3 py-1 rounded-full transition-colors duration-300"
          >
            <MessageCircle size={14} className="text-green-300" />
            <span className="font-medium text-green-300">WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Main navigation with logo */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/981d3653-41bf-4379-847b-f87f6bf2e468.png" 
              alt="TechFlow Logo" 
              className="h-12 w-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechFlow
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
                        <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-colors duration-200 border-b border-border last:border-0"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              );
            })}
            <Link
              to="/starlink"
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Starlink
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.name === 'Services') {
                  return (
                    <div key={item.name} className="flex flex-col">
                      <button
                        onClick={() => setIsMobileServicesOpen((v) => !v)}
                        className="flex items-center justify-between text-muted-foreground hover:text-primary font-medium py-2"
                      >
                        <span>Services</span>
                        <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="pl-4 mt-1 flex flex-col space-y-2 border-l-2 border-primary/30">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              className="text-sm text-muted-foreground hover:text-primary py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/starlink"
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Starlink Installation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;