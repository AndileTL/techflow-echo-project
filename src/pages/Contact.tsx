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
    <div className="pt-8">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
