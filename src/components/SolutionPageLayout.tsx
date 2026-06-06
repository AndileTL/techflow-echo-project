import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export interface SolutionFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface SolutionFAQ {
  q: string;
  a: string;
}

export interface SolutionPageProps {
  slug: string; // /solutions/<slug>
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  features: SolutionFeature[];
  outcomes: { value: string; label: string }[];
  industries: string[];
  faqs: SolutionFAQ[];
}

const SolutionPageLayout = ({
  slug,
  eyebrow,
  title,
  titleAccent,
  intro,
  metaTitle,
  metaDescription,
  keywords,
  features,
  outcomes,
  industries,
  faqs,
}: SolutionPageProps) => {
  const url = `https://techflow.co.zw/solutions/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title + (titleAccent ? ' ' + titleAccent : ''),
    serviceType: eyebrow,
    description: metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'TechFlow Technologies',
      url: 'https://techflow.co.zw/',
      telephone: '+2638677211025',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13 Audley Street, Carneborne Park',
        addressLocality: 'Harare',
        addressCountry: 'ZW',
      },
    },
    areaServed: { '@type': 'Country', name: 'Zimbabwe' },
    url,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://techflow.co.zw/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://techflow.co.zw/services' },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative bg-hero-radial text-white -mt-16 lg:-mt-20 pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-xs font-medium text-white/80 mb-6">
              <Sparkles size={14} className="text-accent" />
              {eyebrow}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
              {title}
              {titleAccent && (
                <span className="block bg-gradient-to-r from-brand-magenta via-primary to-accent bg-clip-text text-transparent">
                  {titleAccent}
                </span>
              )}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">{intro}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/services#consultation-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-7 py-3.5 text-base font-semibold shadow-xl hover:bg-accent transition-all"
              >
                Book Consultation <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/263779822400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">{o.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">What's included</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Everything you need, <span className="gradient-text">delivered as one service</span>.
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 ring-1 ring-primary/10 mb-5">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Industries served</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Trusted across sectors in Zimbabwe.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {industries.map((it) => (
              <span
                key={it}
                className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium"
              >
                <CheckCircle2 size={14} className="text-primary" />
                {it}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight">
                Questions, answered.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-card p-6 open:shadow-lg transition-shadow"
                >
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold flex items-center justify-between gap-4">
                    {f.q}
                    <ArrowRight size={18} className="text-primary transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-magenta/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Ready to build a better stack?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Book a free 30-minute consultation. We'll map your environment and propose a roadmap.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/services#consultation-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-7 py-3.5 text-base font-semibold hover:bg-accent transition-colors"
              >
                Book Consultation <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+2638677211025"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone size={18} /> Call +263 8677 211 025
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionPageLayout;