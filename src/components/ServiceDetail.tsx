
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Globe, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    'it-consultant': {
      title: "IT Consultant",
      description: "Expert consulting services to guide your technology strategy and digital transformation journey with comprehensive analysis and strategic planning.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      features: [
        "Technology Strategy & Roadmap Development",
        "Digital Transformation Planning",
        "Process Optimization & Automation",
        "Risk Assessment & Mitigation",
        "IT Infrastructure Assessment",
        "Business Continuity Planning",
        "Technology ROI Analysis",
        "Vendor Selection & Management"
      ],
      benefits: [
        "Reduced operational costs through optimized processes",
        "Improved business efficiency and productivity",
        "Enhanced competitive advantage",
        "Risk mitigation and compliance assurance"
      ]
    },
    'network-support': {
      title: "Network Support",
      description: "Comprehensive network infrastructure design, implementation, and ongoing support services to ensure reliable and secure connectivity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      features: [
        "Network Design & Architecture",
        "Security Implementation & Monitoring",
        "Performance Optimization",
        "24/7 Network Monitoring",
        "Troubleshooting & Support",
        "Firewall Configuration",
        "VPN Setup & Management",
        "Network Documentation"
      ],
      benefits: [
        "Enhanced network security and protection",
        "Improved network performance and reliability",
        "Reduced downtime and business disruptions",
        "Scalable infrastructure for business growth"
      ]
    },
    'software-development': {
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs and drive digital innovation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Database Design & Optimization",
        "UI/UX Design",
        "Quality Assurance & Testing",
        "Maintenance & Support"
      ],
      benefits: [
        "Streamlined business processes",
        "Improved customer experience",
        "Increased operational efficiency",
        "Competitive market advantage"
      ]
    },
    'cloud-support': {
      title: "Cloud Support",
      description: "Cloud migration, optimization, and management services for scalable business operations with enhanced security and cost efficiency.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      features: [
        "Cloud Migration Strategy",
        "Infrastructure Management",
        "Cost Optimization",
        "Security & Compliance",
        "Backup & Disaster Recovery",
        "Performance Monitoring",
        "Multi-Cloud Management",
        "DevOps Implementation"
      ],
      benefits: [
        "Reduced IT infrastructure costs",
        "Enhanced scalability and flexibility",
        "Improved data security and compliance",
        "Increased business agility"
      ]
    },
    'digital-transformation': {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology infrastructure for the digital age.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Digital Strategy Development",
        "Change Management",
        "Employee Training",
        "Technology Integration",
        "Data Analytics Implementation",
        "Customer Experience Enhancement"
      ],
      benefits: [
        "Increased operational efficiency",
        "Enhanced customer satisfaction",
        "Improved decision-making capabilities",
        "Future-ready business operations"
      ]
    },
    'it-infrastructure': {
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions designed for reliability, scalability, and performance to support your business growth.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      features: [
        "Server Management & Configuration",
        "Data Center Solutions",
        "Backup & Recovery Systems",
        "System Integration",
        "Hardware Procurement",
        "Virtualization Services",
        "Storage Solutions",
        "Infrastructure Monitoring"
      ],
      benefits: [
        "Improved system reliability and uptime",
        "Enhanced data protection and recovery",
        "Scalable infrastructure solutions",
        "Reduced maintenance costs"
      ]
    },
    'it-support': {
      title: "IT Support",
      description: "24/7 comprehensive IT support services to keep your systems running smoothly and efficiently with minimal downtime.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      features: [
        "24/7 Helpdesk Support",
        "Remote Technical Support",
        "On-site Services",
        "System Maintenance",
        "Software Updates",
        "Hardware Troubleshooting",
        "User Training",
        "IT Asset Management"
      ],
      benefits: [
        "Minimized system downtime",
        "Increased user productivity",
        "Proactive issue resolution",
        "Cost-effective IT operations"
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{service.description}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Our Experts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-purple-300" />
                    <span>+2638677211025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-purple-300" />
                    <span>support@techflow.co.zw</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe size={18} className="text-purple-300" />
                    <span>Serving clients globally</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800">What We Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our {service.title.toLowerCase()} services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Contact Us Now
              </Button>
            </a>
            <a href="tel:+2638677211025">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Call: +2638677211025
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
