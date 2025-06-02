
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ITHelpdesk from '@/components/ITHelpdesk';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <ITHelpdesk />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
