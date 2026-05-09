
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Code, Network, Cloud, Zap, Server, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

const Portfolio = () => {
  const projects = [
    {
      id: 'erp-system',
      title: "Enterprise Resource Planning System",
      category: "Software Development",
      description: "Custom ERP solution for a leading manufacturing company with 500+ employees.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      icon: Code
    },
    {
      id: 'cloud-migration',
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete migration of legacy systems to AWS cloud infrastructure for improved scalability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
      icon: Cloud
    },
    {
      id: 'banking-security',
      title: "Banking Network Security Upgrade",
      category: "Network Support",
      description: "Enhanced security infrastructure for a major financial institution with 50+ branches.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      technologies: ["Cisco", "Fortinet", "VPN", "Firewall"],
      icon: Network
    },
    {
      id: 'digital-transformation',
      title: "Digital Transformation Initiative",
      category: "Digital Transformation",
      description: "Complete digital overhaul for a retail chain, including POS systems and inventory management.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      technologies: ["React Native", "Express.js", "MongoDB", "Stripe"],
      icon: Zap
    },
    {
      id: 'data-center',
      title: "Data Center Infrastructure",
      category: "IT Infrastructure",
      description: "Design and implementation of redundant data center infrastructure for 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      technologies: ["VMware", "Dell EMC", "Backup Solutions", "Monitoring"],
      icon: Server
    },
    {
      id: 'it-support-optimization',
      title: "IT Support Optimization",
      category: "IT Support",
      description: "Streamlined IT support processes for a 1000+ employee organization with 24/7 coverage.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      technologies: ["ServiceNow", "Remote Tools", "ITIL", "Automation"],
      icon: Users
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.8%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white py-24 overflow-hidden">
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses across Zimbabwe and internationally transform their operations with innovative technology solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore some of our most successful implementations across various industries and technologies.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                      <project.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={24} />
                    </div>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={`/portfolio/${project.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-500">
                      View Details
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for unique business needs globally.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              { name: "Banking & Finance", projects: "50+", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
              { name: "Healthcare", projects: "30+", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
              { name: "Manufacturing", projects: "75+", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" },
              { name: "Retail & E-commerce", projects: "40+", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
              { name: "Education", projects: "25+", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop" },
              { name: "Government", projects: "20+", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" }
            ].map((industry, index) => (
              <StaggerItem key={index}>
                <Card className="group h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-background border-border">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-primary font-semibold">{industry.projects} Projects</p>
                </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with TechFlow Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Contact Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
