import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/techflow-logo.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/services' },
  { name: 'Connectivity', href: '/isp-reseller' },
  { name: 'Success Stories', href: '/portfolio' },
  { name: 'About', href: '/about' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-brand-navy/85 backdrop-blur-xl border-b border-white/10'
          : isHome
            ? 'bg-transparent'
            : 'bg-brand-navy/70 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="TechFlow Technologies"
              className="h-9 w-9 lg:h-10 lg:w-10 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-display text-lg lg:text-xl font-bold tracking-tight text-white">
              TechFlow
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-4 right-4 -bottom-px h-px bg-gradient-to-r from-brand-magenta via-primary to-accent transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link
              to="/services#consultation-form"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-accent hover:text-brand-navy transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium ${
                      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:bg-white/5"
              >
                Contact
              </a>
              <Link
                to="/services#consultation-form"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-5 py-3 text-sm font-semibold"
              >
                Book Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;