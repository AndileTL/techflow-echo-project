import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Server, ShieldCheck, Wifi, Workflow, Headset } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

const cards = [
  {
    icon: Server,
    title: 'Managed IT',
    desc: 'Outsource your entire IT department to a team that answers the phone.',
    href: '/solutions/managed-it',
  },
  {
    icon: ShieldCheck,
    title: 'Cloud & Cybersecurity',
    desc: 'Microsoft 365, endpoint protection, and 24/7 threat monitoring.',
    href: '/solutions/cloud-cybersecurity',
  },
  {
    icon: Wifi,
    title: 'Connectivity',
    desc: 'Multi-ISP redundancy, Starlink failover, and CCTV/access control.',
    href: '/connectivity',
  },
  {
    icon: Workflow,
    title: 'Digital Transformation & Automation',
    desc: 'Custom platforms, billing systems, and process automation.',
    href: '/solutions/digital-transformation',
  },
  {
    icon: Headset,
    title: 'Contact Center Operations',
    desc: 'Deployment and support for hosted PBX/VoIP call centre systems, from setup to go-live.',
    href: '/solutions/contact-center',
  },
];

const SolutionsLanding = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>IT Solutions | Managed IT, Cloud, Cybersecurity & Digital Transformation — TechFlow</title>
      <meta
        name="description"
        content="Five practice areas, one accountable partner: managed IT, cloud & cybersecurity, connectivity, digital transformation and contact centre operations in Zimbabwe."
      />
      <link rel="canonical" href="https://techflow.co.zw/solutions" />
      <meta property="og:title" content="IT Solutions in Zimbabwe | TechFlow Technologies" />
      <meta
        property="og:description"
        content="Managed IT, cloud & cybersecurity, connectivity, automation and contact centre operations — delivered by certified engineers in Harare."
      />
      <meta property="og:url" content="https://techflow.co.zw/solutions" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Header />

    <section className="relative bg-hero-radial text-white -mt-16 lg:-mt-20 pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Solutions</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
            Solutions built around how your business actually runs.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
            Five practice areas, one accountable partner. Mix and match, or hand us the whole stack.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={c.href}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 ring-1 ring-primary/10 mb-6">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner
      heading="Not sure where to start?"
      subhead="Book a free consultation — we'll audit your setup and recommend the shortest path to reliable IT."
    />
    <Footer />
  </div>
);

export default SolutionsLanding;
