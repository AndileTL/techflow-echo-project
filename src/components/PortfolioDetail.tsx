
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Users, Settings, Award, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PortfolioDetail = () => {
  const { projectId } = useParams();

  const projects = {
    'erp-system': {
      title: "Enterprise Resource Planning System",
      category: "Software Development",
      description: "Custom ERP solution for a leading manufacturing company with 500+ employees, streamlining operations and improving efficiency.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      partners: ["Microsoft", "AWS", "PostgreSQL Foundation", "Docker Inc."],
      deliveryMethods: [
        "Agile Development Methodology",
        "Continuous Integration/Deployment",
        "On-site Implementation",
        "Remote Support & Monitoring",
        "User Training Programs",
        "24/7 Technical Support"
      ],
      projectDetails: {
        duration: "18 months",
        teamSize: "12 developers",
        client: "Manufacturing Corp Zimbabwe",
        scope: "Full ERP implementation covering inventory, finance, HR, and production modules"
      }
    },
    'cloud-migration': {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "Complete migration of legacy systems to AWS cloud infrastructure for improved scalability and cost efficiency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
      partners: ["Amazon Web Services", "Kubernetes Foundation", "HashiCorp", "CNCF"],
      deliveryMethods: [
        "Phased Migration Strategy",
        "Zero-Downtime Deployment",
        "Infrastructure as Code",
        "Auto-scaling Implementation",
        "Security Hardening",
        "Performance Optimization"
      ],
      projectDetails: {
        duration: "12 months",
        teamSize: "8 cloud engineers",
        client: "FinTech Solutions Ltd",
        scope: "Complete cloud transformation including data migration and application modernization"
      }
    },
    'banking-security': {
      title: "Banking Network Security Upgrade",
      category: "Network Support",
      description: "Enhanced security infrastructure for a major financial institution with 50+ branches across Zimbabwe.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      technologies: ["Cisco", "Fortinet", "VPN", "Firewall"],
      partners: ["Cisco Systems", "Fortinet", "Palo Alto Networks", "Check Point"],
      deliveryMethods: [
        "Risk Assessment & Planning",
        "Gradual Branch-by-Branch Rollout",
        "Centralized Security Management",
        "Real-time Monitoring",
        "Incident Response Planning",
        "Compliance Auditing"
      ],
      projectDetails: {
        duration: "24 months",
        teamSize: "15 security specialists",
        client: "Central Bank of Zimbabwe",
        scope: "Network security overhaul including firewalls, intrusion detection, and VPN implementation"
      }
    },
    'digital-transformation': {
      title: "Digital Transformation Initiative",
      category: "Digital Transformation",
      description: "Complete digital overhaul for a retail chain, including POS systems and inventory management.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      technologies: ["React Native", "Express.js", "MongoDB", "Stripe"],
      partners: ["MongoDB", "Stripe", "React Native Community", "Express.js Foundation"],
      deliveryMethods: [
        "Digital Strategy Development",
        "Process Reengineering",
        "System Integration",
        "Staff Training & Change Management",
        "Performance Monitoring",
        "Continuous Improvement"
      ],
      projectDetails: {
        duration: "15 months",
        teamSize: "20 specialists",
        client: "Retail Chain Zimbabwe",
        scope: "End-to-end digital transformation covering POS, inventory, customer management, and analytics"
      }
    },
    'data-center': {
      title: "Data Center Infrastructure",
      category: "IT Infrastructure",
      description: "Design and implementation of redundant data center infrastructure for 99.9% uptime guarantee.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      technologies: ["VMware", "Dell EMC", "Backup Solutions", "Monitoring"],
      partners: ["VMware", "Dell Technologies", "Veeam", "Nagios"],
      deliveryMethods: [
        "Infrastructure Design & Planning",
        "Redundant System Implementation",
        "Disaster Recovery Setup",
        "24/7 Monitoring Implementation",
        "Backup Strategy Deployment",
        "Performance Optimization"
      ],
      projectDetails: {
        duration: "10 months",
        teamSize: "12 infrastructure engineers",
        client: "Government Ministry",
        scope: "Complete data center setup with redundancy, backup systems, and monitoring"
      }
    },
    'it-support-optimization': {
      title: "IT Support Optimization",
      category: "IT Support",
      description: "Streamlined IT support processes for a 1000+ employee organization with 24/7 coverage.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      technologies: ["ServiceNow", "Remote Tools", "ITIL", "Automation"],
      partners: ["ServiceNow", "TeamViewer", "ITIL Foundation", "Microsoft"],
      deliveryMethods: [
        "ITIL Process Implementation",
        "Ticket Management System",
        "Remote Support Tools",
        "SLA Management",
        "Knowledge Base Development",
        "Performance Metrics & Reporting"
      ],
      projectDetails: {
        duration: "8 months",
        teamSize: "25 support specialists",
        client: "Large Corporation",
        scope: "Complete IT support transformation with 24/7 coverage and automated processes"
      }
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
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
          <Link to="/portfolio" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-purple-300 bg-purple-800/50 px-3 py-1 rounded-full mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{project.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-semibold text-purple-300">Duration</div>
                  <div>{project.projectDetails.duration}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-semibold text-purple-300">Team Size</div>
                  <div>{project.projectDetails.teamSize}</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="text-purple-600" />
                  <span>Project Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong className="text-purple-800">Client:</strong>
                  <p className="text-gray-600">{project.projectDetails.client}</p>
                </div>
                <div>
                  <strong className="text-purple-800">Scope:</strong>
                  <p className="text-gray-600">{project.projectDetails.scope}</p>
                </div>
                <div>
                  <strong className="text-purple-800">Technologies:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Major Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="text-blue-600" />
                  <span>Major Partners</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.partners.map((partner, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Award className="text-blue-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{partner}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="text-green-600" />
                  <span>Service Delivery</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.deliveryMethods.map((method, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in Similar Solutions?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Mail className="mr-2" size={18} />
                Get in Touch
              </Button>
            </a>
            <a href="tel:+2638677211025">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Phone className="mr-2" size={18} />
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

export default PortfolioDetail;
