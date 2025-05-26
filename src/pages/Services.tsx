
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Network, 
  Code, 
  Cloud, 
  Zap, 
  Server,
  Headphones,
  ArrowRight,
  Play
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "IT Consultant",
      description: "Expert consulting services to guide your technology strategy and digital transformation journey.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Risk Assessment"],
      details: "Our experienced consultants work closely with your team to develop comprehensive technology strategies that align with your business objectives and drive sustainable growth."
    },
    {
      icon: Network,
      title: "Network Support",
      description: "Comprehensive network infrastructure design, implementation, and ongoing support services.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
      details: "From small office networks to enterprise-level infrastructure, we design, implement, and maintain robust network solutions that ensure reliable connectivity and optimal performance."
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"],
      details: "Our development team creates scalable, secure, and user-friendly applications using cutting-edge technologies and best practices in software engineering."
    },
    {
      icon: Cloud,
      title: "Cloud Support",
      description: "Cloud migration, optimization, and management services for scalable business operations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"],
      details: "Transform your business with cloud computing solutions that provide flexibility, scalability, and cost-effectiveness while maintaining the highest security standards."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"],
      details: "We help businesses embrace digital technologies to improve efficiency, enhance customer experience, and create new revenue streams in the digital economy."
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      features: ["Server Management", "Data Center Solutions", "Backup & Recovery", "System Integration"],
      details: "Build a solid foundation for your business operations with our comprehensive IT infrastructure services, ensuring maximum uptime and optimal performance."
    },
    {
      icon: Headphones,
      title: "IT Support",
      description: "24/7 comprehensive IT support services to keep your systems running smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      features: ["24/7 Helpdesk", "Remote Support", "On-site Services", "System Maintenance"],
      details: "Our dedicated support team is available around the clock to resolve issues quickly and keep your business operations running smoothly without interruption."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              See Our Solutions in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how TechFlow Technologies delivers innovative solutions that drive business success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                    <Play className="text-white" size={32} />
                  </div>
                  <p className="text-white text-lg">Technology Solutions Overview</p>
                  <p className="text-purple-200 text-sm mt-2">Click to play demo video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-purple-100 hover:border-purple-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                    <service.icon className="text-purple-600 group-hover:text-white transition-colors duration-500" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{service.details}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
