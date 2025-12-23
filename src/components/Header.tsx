import { useState } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';
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
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-red-100">
      {/* Top bar with Christmas gradient */}
      <div className="bg-gradient-to-r from-red-700 via-green-700 to-red-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <Phone size={16} />
              <span>+2638677211025</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <Mail size={16} />
              <span>sales@techflow.co.zw</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="text-yellow-400 animate-pulse" size={16} />
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent font-semibold">
              🎄 Happy Holidays & New Year 2025! 🎆
            </span>
            <Sparkles className="text-yellow-400 animate-pulse" size={16} />
          </div>
        </div>
      </div>

      {/* Main navigation with logo */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/981d3653-41bf-4379-847b-f87f6bf2e468.png" 
              alt="TechFlow Logo" 
              className="h-12 w-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
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
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-red-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
