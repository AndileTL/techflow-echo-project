import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const stories = [
  {
    slug: 'managed-it-services',
    industry: 'Insurance',
    title: 'Harare insurer cuts downtime by 92% with Managed IT',
    metric: '92% less downtime',
    color: 'from-primary to-brand-magenta',
  },
  {
    slug: 'isp-redundancy-starlink-failover',
    industry: 'Logistics',
    title: 'Nationwide logistics gains zero-downtime with Starlink failover',
    metric: '99.99% uptime',
    color: 'from-secondary to-accent',
  },
  {
    slug: 'voip-rollout-national-retailer',
    industry: 'Retail',
    title: 'National retailer modernises 38 stores with hosted VoIP',
    metric: '38 sites unified',
    color: 'from-brand-magenta to-secondary',
  },
  {
    slug: 'm365-migration-ngo',
    industry: 'NGO',
    title: 'Regional NGO migrates 240 staff to Microsoft 365',
    metric: '240 users migrated',
    color: 'from-accent to-primary',
  },
];

const SuccessStories = () => (
  <section className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Success Stories</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Outcomes that move <span className="gradient-text">business forward</span>.
          </h2>
        </div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-magenta transition-colors"
        >
          View all stories <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stories.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/portfolio/${s.slug}`}
              className="group relative block rounded-3xl bg-card border border-border p-8 lg:p-10 overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.color}`} />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl bg-gradient-to-br ${s.color}" />
              <div className="relative">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {s.industry}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                  {s.title}
                </h3>
                <div className="mt-8 flex items-end justify-between">
                  <div className={`font-display text-3xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                    {s.metric}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read story <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;