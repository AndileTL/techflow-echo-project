import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CtaBannerProps {
  heading?: string;
  subhead?: string;
}

const CtaBanner = ({
  heading = 'Ready for bulletproof technology?',
  subhead = 'Talk to our team today and design a solution tailored to your business.',
}: CtaBannerProps) => (
  <section className="relative py-20 lg:py-24 bg-brand-navy text-white overflow-hidden">
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-magenta/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl" />
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {heading}
        </h2>
        <p className="mt-6 text-lg text-white/70">{subhead}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+2638677211025"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-7 py-3.5 text-base font-semibold hover:bg-accent transition-colors"
          >
            <Phone size={18} /> Call +263 8677 211 025
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
