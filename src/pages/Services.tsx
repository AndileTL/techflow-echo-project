
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Network, 
  Code, 
  Cloud, 
  Zap, 
  Server,
  Headphones,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  Satellite,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          service: formData.service || null,
          message: formData.message.trim(),
          phone: null
        });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      id: 'it-consultant',
      icon: Users,
      title: "IT Consultant",
      description: "Expert consulting services to guide your technology strategy and digital transformation journey.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Risk Assessment"],
      details: "Our experienced consultants work closely with your team to develop comprehensive technology strategies that align with your business objectives and drive sustainable growth.",
      color: "from-primary to-secondary"
    },
    {
      id: 'network-support',
      icon: Network,
      title: "Network Support",
      description: "Comprehensive network infrastructure design, implementation, and ongoing support services.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
      details: "From small office networks to enterprise-level infrastructure, we design, implement, and maintain robust network solutions that ensure reliable connectivity.",
      color: "from-secondary to-accent"
    },
    {
      id: 'software-development',
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"],
      details: "Our development team creates scalable, secure, and user-friendly applications using cutting-edge technologies and best practices.",
      color: "from-accent to-primary"
    },
    {
      id: 'cloud-support',
      icon: Cloud,
      title: "Cloud Support",
      description: "Cloud migration, optimization, and management services for scalable business operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"],
      details: "Transform your business with cloud computing solutions that provide flexibility, scalability, and cost-effectiveness.",
      color: "from-primary to-accent"
    },
    {
      id: 'digital-transformation',
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"],
      details: "We help businesses embrace digital technologies to improve efficiency, enhance customer experience, and create new revenue streams.",
      color: "from-secondary to-primary"
    },
    {
      id: 'it-infrastructure',
      icon: Server,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      features: ["Server Management", "Data Center Solutions", "Backup & Recovery", "System Integration"],
      details: "Build a solid foundation for your business operations with our comprehensive IT infrastructure services.",
      color: "from-accent to-secondary"
    },
    {
      id: 'it-support',
      icon: Headphones,
      title: "IT Support",
      description: "24/7 comprehensive IT support services to keep your systems running smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      features: ["24/7 Helpdesk", "Remote Support", "On-site Services", "System Maintenance"],
      details: "Our dedicated support team is available around the clock to resolve issues quickly and keep your business running.",
      color: "from-primary to-secondary"
    },
    {
      id: 'starlink-installation',
      icon: Satellite,
      title: "Starlink Installation",
      description: "Professional Starlink satellite internet installation, setup, and ongoing technical support.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop",
      features: ["Professional Installation", "Network Configuration", "Signal Optimization", "24/7 Support"],
      details: "Get high-speed satellite internet with our expert Starlink installation and configuration services.",
      color: "from-secondary to-accent"
    }
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Clients Served" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Award, value: "50+", label: "Projects Delivered" }
  ];

  const testimonials = [
    {
      quote: "TechFlow transformed our entire IT infrastructure. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      role: "CEO, InnovateTech",
      rating: 5
    },
    {
      quote: "The team's 24/7 support has been invaluable. Response times are incredible and solutions are always effective.",
      author: "Michael Chen",
      role: "IT Director, GlobalCorp",
      rating: 5
    },
    {
      quote: "Their cloud migration service saved us 40% on infrastructure costs while improving performance.",
      author: "Emily Davis",
      role: "CTO, StartupHub",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/512px-Dell_Logo.svg.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/480px-HP_logo_2012.svg.png" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-primary-foreground py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              <Zap className="text-accent" size={20} />
              <span className="text-white/90 font-medium">Technology Solutions for the Modern Enterprise</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive IT Services
              <span className="block bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                That Drive Results
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              From strategic consulting to 24/7 support, we provide end-to-end technology solutions 
              that empower your business to thrive in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  <stat.icon className="text-primary group-hover:text-white transition-colors duration-500" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Trusted Technology Partners
              </h3>
              <p className="text-lg text-foreground">
                We partner with industry-leading technology providers
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Scrolling logos */}
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-16"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
                <Server className="text-primary" size={20} />
                <span className="text-foreground font-semibold">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Complete Technology Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We offer a comprehensive suite of IT services designed to meet the unique needs of your business.
                Each service is tailored to deliver maximum value and drive measurable results.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <service.icon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={`/service/${service.id}`}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full mb-4 border border-accent/20">
                <Star className="text-accent" size={20} />
                <span className="text-foreground font-semibold">Client Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about working with TechFlow.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-gradient-to-br from-background to-primary/5 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <blockquote className="text-foreground text-lg mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="consultation-form" className="py-20 lg:py-28 bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Content */}
            <ScrollAnimation direction="left">
              <div className="text-white">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <Phone className="text-accent" size={20} />
                  <span className="text-white/90 font-medium">Get in Touch</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Transform
                  <span className="block bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent">
                    Your Business?
                  </span>
                </h2>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Let's discuss how our technology solutions can help your business achieve its goals. 
                  Schedule a free consultation with our experts today.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-white/90">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Call us at</div>
                      <a href="tel:+2638677211025" className="font-semibold hover:text-accent transition-colors">
                        +263 8677 211 025
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-white/90">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email us at</div>
                      <a href="mailto:sales@techflow.co.zw" className="font-semibold hover:text-accent transition-colors">
                        sales@techflow.co.zw
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right side - Form */}
            <ScrollAnimation direction="right">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Request a Consultation</CardTitle>
                  <CardDescription className="text-white/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                          required
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <Input 
                          id="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                          required
                          maxLength={255}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                        Company Name
                      </label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/90 mb-2">
                        Service Interested In
                      </label>
                      <select 
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white focus:border-accent focus:ring-accent focus:outline-none [&>option]:bg-background [&>option]:text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                        Your Message <span className="text-accent">*</span>
                      </label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or requirements..." 
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent resize-none"
                        required
                        maxLength={1000}
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Free Consultation
                          <ArrowRight className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
