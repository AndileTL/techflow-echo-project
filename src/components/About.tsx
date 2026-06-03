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

const About = () => {
  return (
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
};

export default About;

// legacy unused export hook to satisfy any imports
export const __aboutLegacy = () => {
  return null;
};

// noop to avoid leftover symbols in older imports
function _unused() {
}
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Zimbabwe"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      description: "Proven track record in tech solutions"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: Target,
      value: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered solutions"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable service you can trust"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term relationships with clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation direction="left">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
                  <Users className="text-primary" size={20} />
                  <span className="text-foreground font-semibold">About TechFlow</span>
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
                  Leading Technology Solutions in Zimbabwe
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TechFlow is Zimbabwe's premier technology solutions provider, specializing in innovative 
                  digital transformation services. With over a decade of experience, we've helped hundreds 
                  of businesses across various industries achieve their technology goals.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team of expert developers, consultants, and technicians work tirelessly to deliver 
                  cutting-edge solutions that drive growth, improve efficiency, and create competitive advantages 
                  for our clients.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. 
                  Every project we undertake is an opportunity to showcase our expertise and build lasting 
                  partnerships with our clients.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border group">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                        <stat.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={24} />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-foreground font-semibold mb-1">{stat.label}</div>
                      <div className="text-muted-foreground text-sm">{stat.description}</div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollAnimation>
        </div>

        {/* Our Values Section */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define our commitment to excellence.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={0.15}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    <value.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollAnimation delay={0.3}>
          <Card className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground p-8 shadow-2xl">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/services#consultation-form">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <a href="#contact">Schedule Consultation</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
