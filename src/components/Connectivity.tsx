import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Satellite, Wifi, Radio, Network, Shield, Globe2, ArrowRight } from 'lucide-react';
import showcaseVideo from '@/assets/techflow-showcase.mp4.asset.json';

const links = [
  { icon: Satellite, name: 'Starlink', desc: 'Low-orbit satellite for anywhere coverage' },
  { icon: Wifi, name: 'Fibre', desc: 'High-throughput business broadband' },
  { icon: Radio, name: 'LTE / 5G', desc: 'Wireless connectivity & failover' },
  { icon: Network, name: 'MPLS', desc: 'Private carrier-grade links' },
  { icon: Globe2, name: 'SD-WAN', desc: 'Intelligent multi-link routing' },
  { icon: Shield, name: 'VPN', desc: 'Encrypted site-to-site tunnels' },
];

const Connectivity = () => {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const heavy = !reduce && !isMobile;
  return (
  <section className="relative py-24 lg:py-32 bg-brand-navy text-white overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand-magenta/20 blur-3xl will-change-transform"
        animate={heavy ? { scale: [1, 1.08, 1] } : undefined}
        transition={heavy ? { duration: 14, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Connectivity</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Connectivity <span className="bg-gradient-to-r from-accent via-secondary to-brand-magenta bg-clip-text text-transparent">without limits</span>.
        </h2>
        <p className="mt-6 text-lg text-white/70">
          Multi-ISP redundancy with Starlink failover, SD-WAN orchestration, and 24/7 NOC
          monitoring — your business stays online, anywhere in Africa.
        </p>
      </div>

      {/* Orbit visual */}
      <div className="relative mx-auto mt-20 h-[280px] sm:h-[360px] max-w-3xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-br from-brand-magenta to-secondary shadow-[0_0_120px_rgba(217,70,239,0.4)] flex items-center justify-center">
            <Globe2 className="h-16 w-16 sm:h-20 sm:w-20 text-white/90" />
          </div>
        </div>
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 flex items-center justify-center"
            animate={heavy ? { rotate: 360 } : undefined}
            transition={heavy ? { duration: 24 + ring * 12, repeat: Infinity, ease: 'linear' } : undefined}
            style={{ willChange: heavy ? 'transform' : undefined }}
          >
            <div
              className="rounded-full border border-white/10"
              style={{
                width: `${260 + ring * 60}px`,
                height: `${260 + ring * 60}px`,
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -ml-[180px] sm:-ml-[210px] h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(56,189,248,0.8)]"
          animate={heavy ? { rotate: 360 } : undefined}
          transition={heavy ? { duration: 18, repeat: Infinity, ease: 'linear' } : undefined}
          style={{ transformOrigin: '180px center', willChange: heavy ? 'transform' : undefined }}
        />
      </div>

      {/* Embedded showcase video — glassmorphism frame */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto mt-20 max-w-4xl"
      >
        <div className="absolute -inset-4 bg-gradient-to-br from-brand-magenta/30 via-secondary/20 to-accent/30 blur-2xl rounded-[2rem] opacity-60" />
        <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="aspect-video bg-brand-navy/60">
            <video
              src={showcaseVideo.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent px-6 py-4 sm:px-8 sm:py-5 pointer-events-none">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">In the field</div>
            <div className="font-display text-base sm:text-lg text-white/90 mt-1">
              Starlink deployments, enterprise networks and CCTV — engineered by TechFlow.
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-2xl p-5 sm:p-6 hover:bg-white/[0.08] transition-colors"
          >
            <l.icon className="h-6 w-6 text-accent mb-3" />
            <div className="font-display text-lg font-semibold">{l.name}</div>
            <div className="text-sm text-white/60 mt-1">{l.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/isp-reseller"
          className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
        >
          Explore connectivity solutions
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default Connectivity;