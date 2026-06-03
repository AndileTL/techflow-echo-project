import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/techflow-logo.png';

const stats = [
  { value: '500+', label: 'Businesses served' },
  { value: '10+', label: 'Years operating' },
  { value: '99.9%', label: 'Uptime delivered' },
  { value: '24/7', label: 'NOC coverage' },
];

const About = () => (
  <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About TechFlow</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Technology that moves <span className="gradient-text">business forward</span>.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              TechFlow Technologies is a Zimbabwe-based, regionally focused technology
              partner. We design, deploy, and operate the connectivity, cloud, and
              cybersecurity that modern African businesses depend on.
            </p>
            <p>
              Our engineers carry certifications from Microsoft, Cisco, MikroTik, and
              Sophos — but what sets us apart is a business-first mindset: we measure
              success in your outcomes, not our tickets closed.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-primary transition-colors"
            >
              Our story
              <ArrowRight size={16} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
            >
              Talk to our team
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy to-primary p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-magenta/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/40 blur-3xl" />
            <div className="relative">
              <img src={logo} alt="TechFlow" className="h-16 w-16 object-contain mb-8" />
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
                    <div className="text-sm text-white/70 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
