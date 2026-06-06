import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/techflow-logo.png';

const solutionsItems = [
  { name: 'Managed IT', href: '/solutions/managed-it' },
  { name: 'Cloud & Cybersecurity', href: '/solutions/cloud-cybersecurity' },
  { name: 'Connectivity', href: '/solutions/connectivity' },
  { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/services', dropdown: solutionsItems },
  { name: 'Connectivity', href: '/isp-reseller' },
  { name: 'Success Stories', href: '/portfolio' },
  { name: 'About', href: '/about' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-brand-navy/85 backdrop-blur-xl border-b border-white/10'
          : isHome
            ? 'bg-brand-navy/40 backdrop-blur-md'
            : 'bg-brand-navy/70 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 min-h-[64px] lg:min-h-[80px]">
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
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {solutionsOpen && (
                    <div className="absolute left-0 top-full pt-2 w-64 animate-fade-in">
                      <div className="rounded-xl bg-brand-navy/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            to={d.href}
                            className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                          >
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
              )
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
              className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-accent hover:text-brand-navy transition-all duration-300 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Book Consultation</span>
              <span className="xl:hidden">Book</span>
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
          <div className="lg:hidden pb-6 pt-2 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-base font-medium ${
                        isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.dropdown && (
                    <div className="ml-3 pl-3 border-l border-white/10 mt-1 mb-2 space-y-0.5">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          className="block px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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