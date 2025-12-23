
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Network, 
  Code, 
  Cloud, 
  Zap, 
  Server,
  Headphones,
  Satellite,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'it-consultant',
      icon: Users,
      title: "IT Consultant",
      description: "Expert consulting services to guide your technology strategy and digital transformation journey.",
      features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Risk Assessment"]
    },
    {
      id: 'network-support',
      icon: Network,
      title: "Network Support",
      description: "Comprehensive network infrastructure design, implementation, and ongoing support services.",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"]
    },
    {
      id: 'software-development',
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs.",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"]
    },
    {
      id: 'cloud-support',
      icon: Cloud,
      title: "Cloud Support",
      description: "Cloud migration, optimization, and management services for scalable business operations.",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"]
    },
    {
      id: 'digital-transformation',
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology.",
      features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"]
    },
    {
      id: 'it-infrastructure',
      icon: Server,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance.",
      features: ["Server Management", "Data Center Solutions", "Backup & Recovery", "System Integration"]
    },
    {
      id: 'it-support',
      icon: Headphones,
      title: "IT Support",
      description: "24/7 comprehensive IT support services to keep your systems running smoothly and efficiently.",
      features: ["24/7 Helpdesk", "Remote Support", "On-site Services", "System Maintenance"]
    },
    {
      id: 'starlink-installation',
      icon: Satellite,
      title: "Starlink Installation & Support",
      description: "Professional Starlink satellite internet installation, setup, and ongoing technical support services.",
      features: ["Professional Installation", "Network Configuration", "Signal Optimization", "24/7 Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-red-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background decoration - Christmas themed */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-green-100 px-4 py-2 rounded-full mb-4">
            <Zap className="text-red-600" size={20} />
            <span className="text-green-800 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-green-700 bg-clip-text text-transparent mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer complete technology solutions to help your business thrive in the digital age. 
            From consulting to implementation, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-red-100 hover:border-green-300">
              <CardHeader className="pb-3">
                <div className="w-14 h-14 bg-gradient-to-r from-red-100 to-green-100 rounded-xl flex items-center justify-center mb-3 group-hover:from-red-600 group-hover:to-green-600 transition-all duration-500 shadow-lg">
                  <service.icon className="text-red-600 group-hover:text-white transition-colors duration-500 group-hover:scale-110" size={28} />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/service/${service.id}`}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-green-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-md hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
