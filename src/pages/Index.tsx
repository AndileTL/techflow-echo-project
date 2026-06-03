import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyTechFlow from '@/components/WhyTechFlow';
import Industries from '@/components/Industries';
import Connectivity from '@/components/Connectivity';
import Ecosystem from '@/components/Ecosystem';
import SuccessStories from '@/components/SuccessStories';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechFlowAIChatbot from '@/components/TechFlowAIChatbot';

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best IT service provider in Zimbabwe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TechFlow Technologies is widely regarded as one of the best IT service providers in Zimbabwe, offering managed IT, Microsoft 365, VoIP, Starlink installation and multi-ISP redundancy from our Harare office."
        }
      },
      {
        "@type": "Question",
        "name": "Where is TechFlow Technologies located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TechFlow Technologies is located at 13 Audley Street, Carneborne Park, Harare, Zimbabwe."
        }
      },
      {
        "@type": "Question",
        "name": "Which ISPs does TechFlow resell in Zimbabwe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We resell Liquid Home, TelOne, Telco and Dark Fiber Africa, with Starlink as automatic failover for guaranteed business uptime."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Best IT Service Provider in Zimbabwe | TechFlow Technologies</title>
        <meta name="description" content="Voted among the best IT service providers in Zimbabwe. Managed IT, Microsoft 365, VoIP, Starlink & ISP redundancy (Liquid, TelOne, Telco, DFA) in Harare." />
        <link rel="canonical" href="https://techflow.co.zw/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <Hero />
      <WhyTechFlow />
      <Industries />
      <Connectivity />
      <Ecosystem />
      <SuccessStories />
      <About />
      <Contact />
      <Footer />
      <TechFlowAIChatbot />
    </div>
  );
};

export default Index;
