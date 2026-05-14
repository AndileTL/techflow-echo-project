import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Wifi,
  Satellite,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Headphones,
  Settings,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/scroll-animation';

const isps = [
  {
    name: 'Liquid Home',
    type: 'Fibre to the Home / Business',
    blurb:
      'High-speed uncapped fibre across major Zimbabwean cities with reliable performance for business workloads.',
  },
  {
    name: 'TelOne',
    type: 'National Fibre & ADSL',
    blurb:
      'Zimbabwe\u2019s national carrier with broad coverage and dedicated business broadband packages.',
  },
  {
    name: 'Telco',
    type: 'Wireless & Fibre Connectivity',
    blurb:
      'Flexible business connectivity options ideal for offices that need quick provisioning.',
  },
  {
    name: 'Dark Fiber Africa (DFA)',
    type: 'Carrier-Grade Fibre Backbone',
    blurb:
      'Dedicated dark and lit fibre solutions for enterprises that demand the highest throughput and SLA.',
  },
];

const IspReseller = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Wifi className="text-accent" size={20} />
              <span className="text-white/90 font-medium">
                ISP Reseller & Internet Redundancy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Always Online with
              <span className="block bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Multi-ISP Redundancy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              We resell the following Zimbabwean ISPs and pair them with Starlink
              as automatic failover, so your business never loses connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a
                  href="https://wa.me/263772800790"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp 0772 800 790
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/services#consultation-form">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ISP Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  We Resell the Following ISPs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pick the ISP that fits your location and budget — or combine
                them for resilient, always-on connectivity.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {isps.map((isp) => (
              <StaggerItem key={isp.name}>
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <Wifi className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {isp.name}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                      {isp.type}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isp.blurb}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Starlink Failover Explainer */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full mb-4 border border-accent/20">
                <Satellite className="text-accent" size={20} />
                <span className="text-foreground font-semibold">
                  Starlink Failover
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Zero Downtime, Even When Fibre Fails
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Your primary ISP handles day-to-day traffic. The moment it
                drops, our smart router automatically switches to Starlink —
                seconds, not hours. When the primary link recovers, traffic
                routes back without you lifting a finger.
              </p>
              <ul className="space-y-3">
                {[
                  'Automatic failover in under 30 seconds',
                  'Load balancing across multiple ISPs',
                  'Centralised monitoring and alerts',
                  'Single monthly invoice for all links',
                  'On-site and remote support included',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle
                      className="text-primary mr-3 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card className="bg-gradient-to-br from-brand-navy to-primary/90 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center">
                        <Wifi className="text-accent mr-3" size={24} />
                        <div>
                          <div className="font-semibold">Primary ISP</div>
                          <div className="text-xs text-white/70">
                            Liquid / TelOne / DFA / Telco
                          </div>
                        </div>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <Zap className="text-accent animate-pulse" size={32} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center">
                        <Satellite className="text-accent mr-3" size={24} />
                        <div>
                          <div className="font-semibold">Starlink</div>
                          <div className="text-xs text-white/70">
                            Automatic Failover
                          </div>
                        </div>
                      </div>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        Standby
                      </span>
                    </div>
                    <div className="pt-4 border-t border-white/20 flex items-center text-sm text-white/80">
                      <Shield
                        className="text-accent mr-2 flex-shrink-0"
                        size={18}
                      />
                      Smart router automatically routes traffic to keep you
                      online.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Fully Managed Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
                <Settings className="text-primary" size={20} />
                <span className="text-foreground font-semibold">Fully Managed on Your Behalf</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  We Manage the Whole Stack — You Just Use the Internet
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From provisioning and installation to monitoring, billing, and
                troubleshooting — TechFlow handles every ISP relationship,
                router, and failover rule on your behalf.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Settings,
                title: 'Provision & Install',
                desc: 'We negotiate with each ISP, install the lines, configure routers, and get you online quickly.',
              },
              {
                icon: Shield,
                title: '24/7 Monitoring',
                desc: 'Our NOC watches every link in real time and reacts before you notice an issue.',
              },
              {
                icon: Headphones,
                title: 'One Point of Contact',
                desc: 'Forget juggling 4 ISPs. Call TechFlow — we deal with Liquid, TelOne, Telco, and DFA for you.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Star Package */}
          <ScrollAnimation>
            <Card className="bg-gradient-to-br from-brand-navy via-primary to-secondary text-white border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-accent/30">
                      <Star className="text-accent fill-accent" size={16} />
                      <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Star Package</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      IT Managed Services — Outsource Your Entire IT Department
                    </h3>
                    <p className="text-white/85 text-lg mb-6 leading-relaxed">
                      Hand over your IT to TechFlow. We become your IT department:
                      connectivity, hardware, cloud, Microsoft 365, security, user
                      support, and strategy — all under one predictable monthly fee.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {[
                        'Dedicated account manager',
                        'Unlimited remote helpdesk',
                        'On-site engineer visits',
                        'Proactive patching & security',
                        'Cloud & Microsoft 365 admin',
                        'Quarterly IT strategy reviews',
                      ].map((f) => (
                        <li key={f} className="flex items-start text-sm">
                          <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-white/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-xl">
                      <Link to="/service/managed-it-services">
                        Explore Managed IT
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                      <a href="https://wa.me/263772800790" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2" size={18} />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Bulletproof Internet?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Talk to our connectivity team today and design a redundant ISP
            setup tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href="tel:+2638677211025">
                <Phone className="mr-2" size={20} />
                Call +263 8677 211 025
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/services#consultation-form">
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IspReseller;