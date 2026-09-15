import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Contact TechFlow Technologies | IT Support & Consultation in Harare</title>
      <meta
        name="description"
        content="Talk to TechFlow Technologies in Harare. Book a free consultation for managed IT, connectivity, cybersecurity, CCTV or cloud — or WhatsApp us on 0716 881 185."
      />
      <link rel="canonical" href="https://techflow.co.zw/contact" />
      <meta property="og:title" content="Contact TechFlow Technologies" />
      <meta
        property="og:description"
        content="Book a free consultation with TechFlow Technologies — 13 Audley Street, Cranborne Park, Harare."
      />
      <meta property="og:url" content="https://techflow.co.zw/contact" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Header />
    <section className="relative bg-hero-radial text-white -mt-16 lg:-mt-20 pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
          Let's talk about your technology.
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
          Call, WhatsApp or send us a message — a TechFlow engineer in Harare will get back to you, usually the same
          working day.
        </p>
      </div>
    </section>
    <Contact />
    <CtaBanner
      heading="Prefer to speak to someone?"
      subhead="Book a free 30-minute consultation and we'll map the fastest route to reliable, secure technology."
    />
    <Footer />
  </div>
);

export default ContactPage;

    <Footer />
  </div>
);

export default ContactPage;
