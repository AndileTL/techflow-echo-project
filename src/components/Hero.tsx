import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
  { value: 'Nationwide', label: 'Coverage' },
  { value: 'Enterprise', label: 'Security' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-hero-radial text-white -mt-16 lg:-mt-20 pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 80%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-magenta/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-xs sm:text-sm font-medium text-white/80 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Trusted by businesses across Zimbabwe & Southern Africa
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-balance"
          >
            Smarter Technology.
            <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              Faster Connectivity.
            </span>
            <span className="block bg-gradient-to-r from-brand-magenta via-primary to-secondary bg-clip-text text-transparent">
              Built For Africa.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            TechFlow delivers managed IT, cloud infrastructure, cybersecurity,
            connectivity, and digital transformation solutions that keep
            businesses connected, secure, and productive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/services#consultation-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-7 py-3.5 text-base font-semibold shadow-xl hover:bg-accent transition-all duration-300 hover:scale-[1.02]"
            >
              Book Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+2638677211025"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={18} />
              Talk To An Expert
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl glass-card overflow-hidden"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-brand-navy/40 px-6 py-6"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
