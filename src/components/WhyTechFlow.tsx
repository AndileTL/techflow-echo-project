import { motion } from 'framer-motion';
import { Shield, Zap, Users, Activity, Award, MapPin } from 'lucide-react';

const points = [
  { icon: Shield, title: 'Enterprise-grade security', desc: 'Hardened networks, MFA, EDR, and 24/7 threat monitoring across every endpoint.' },
  { icon: MapPin, title: 'Local Zimbabwe support', desc: 'Engineers on the ground in Harare with rapid on-site response when you need it.' },
  { icon: Award, title: 'Certified engineers', desc: 'Microsoft, Cisco, MikroTik and Sophos certified specialists on every account.' },
  { icon: Activity, title: 'Proactive monitoring', desc: 'We detect and resolve issues before they reach your users — measured in seconds, not hours.' },
  { icon: Zap, title: 'Fast response times', desc: 'SLA-backed response: critical tickets answered in under 15 minutes.' },
  { icon: Users, title: 'Strategic consulting', desc: 'A dedicated vCIO helps you plan, budget, and execute a clear technology roadmap.' },
];

const WhyTechFlow = () => (
  <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why TechFlow</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Why businesses across Africa <span className="gradient-text">choose TechFlow</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Premium technology, delivered with the responsiveness of a local partner and the
          discipline of a global operator.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="group"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 ring-1 ring-primary/10 mb-5 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
              <p.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTechFlow;