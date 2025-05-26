
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Code, Network, Cloud, Zap, Server, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning System",
      category: "Software Development",
      description: "Custom ERP solution for a leading manufacturing company with 500+ employees.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      icon: Code
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete migration of legacy systems to AWS cloud infrastructure for improved scalability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
      icon: Cloud
    },
    {
      title: "Banking Network Security Upgrade",
      category: "Network Support",
      description: "Enhanced security infrastructure for a major financial institution with 50+ branches.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      technologies: ["Cisco", "Fortinet", "VPN", "Firewall"],
      icon: Network
    },
    {
      title: "Digital Transformation Initiative",
      category: "Digital Transformation",
      description: "Complete digital overhaul for a retail chain, including POS systems and inventory management.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      technologies: ["React Native", "Express.js", "MongoDB", "Stripe"],
      icon: Zap
    },
    {
      title: "Data Center Infrastructure",
      category: "IT Infrastructure",
      description: "Design and implementation of redundant data center infrastructure for 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      technologies: ["VMware", "Dell EMC", "Backup Solutions", "Monitoring"],
      icon: Server
    },
    {
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses across Zimbabwe transform their operations with innovative technology solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our most successful implementations across various industries and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                      <project.icon className="text-purple-600 group-hover:text-white transition-colors duration-500" size={24} />
                    </div>
                    <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                    View Details
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Banking & Finance", projects: "50+", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
              { name: "Healthcare", projects: "30+", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
              { name: "Manufacturing", projects: "75+", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" },
              { name: "Retail & E-commerce", projects: "40+", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
              { name: "Education", projects: "25+", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop" },
              { name: "Government", projects: "20+", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" }
            ].map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                  <p className="text-purple-600 font-semibold">{industry.projects} Projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with TechFlow Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Request Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
