import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
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
              )
            ))}
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
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
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
                )
              ))}
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