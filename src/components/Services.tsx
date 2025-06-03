
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
  ArrowRight,
  Play
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'it-consultant',
      icon: Users,
      title: "IT Consultant",
      description: "Expert consulting services to guide your technology strategy and digital transformation journey.",
      features: ["Technology Strategy", "Digital Roadmap", "Process Optimization", "Risk Assessment"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      id: 'network-support',
      icon: Network,
      title: "Network Support",
      description: "Comprehensive network infrastructure design, implementation, and ongoing support services.",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Troubleshooting"],
      color: "bg-purple-50 border-purple-100"
    },
    {
      id: 'software-development',
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs.",
      features: ["Web Applications", "Mobile Apps", "Custom Software", "API Development"],
      color: "bg-green-50 border-green-100"
    },
    {
      id: 'cloud-support',
      icon: Cloud,
      title: "Cloud Support",
      description: "Cloud migration, optimization, and management services for scalable business operations.",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security & Compliance"],
      color: "bg-orange-50 border-orange-100"
    },
    {
      id: 'digital-transformation',
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology.",
      features: ["Process Automation", "Legacy System Upgrade", "Digital Strategy", "Change Management"],
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      id: 'it-infrastructure',
      icon: Server,
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance.",
      features: ["Server Management", "Data Center Solutions", "Backup & Recovery", "System Integration"],
      color: "bg-pink-50 border-pink-100"
    },
    {
      id: 'it-support',
      icon: Headphones,
      title: "IT Support",
      description: "24/7 comprehensive IT support services to keep your systems running smoothly and efficiently.",
      features: ["24/7 Helpdesk", "Remote Support", "On-site Services", "System Maintenance"],
      color: "bg-cyan-50 border-cyan-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Zap className="text-gray-600" size={16} />
            <span className="text-gray-700 font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer complete technology solutions to help your business thrive in the digital age. 
            From consulting to implementation, we've got you covered with innovative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.color} border-2`}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <service.icon className="text-gray-700 group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-600 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/service/${service.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300 rounded-full font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our technology solutions can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full">
                <Play size={16} className="mr-2" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
