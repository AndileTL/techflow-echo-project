import { motion } from 'framer-motion';
import {
  Building2, Banknote, GraduationCap, HeartPulse,
  Factory, ShoppingBag, HandHeart, Landmark,
} from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Real Estate' },
  { icon: Banknote, name: 'Financial Services' },
  { icon: GraduationCap, name: 'Education' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: ShoppingBag, name: 'Retail' },
  { icon: HandHeart, name: 'NGOs' },
  { icon: Landmark, name: 'Government' },
];

const Industries = () => (
  <section className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Industries</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Tailored technology for <span className="gradient-text">every sector</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          From banks and hospitals to schools and mines — we engineer secure, reliable IT for
          businesses of every shape across Southern Africa.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl bg-card border border-border p-6 sm:p-8 overflow-hidden transition-shadow hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-brand-magenta/5 group-hover:to-secondary/10 transition-all duration-500" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-500">
                <it.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{it.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;