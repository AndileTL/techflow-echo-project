import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Check, Satellite, Wifi, Shield, Clock, Phone, Mail, MapPin, Zap, Users, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Starlink = () => {
  const pricingPackages = [
    {
      name: "Residential Basic",
      price: "$80",
      description: "Perfect for home users",
      features: [
        "Site survey & assessment",
        "Standard installation",
        "Basic router configuration",
        "Signal optimization",
        "30-day support",
        "Installation warranty"
      ],
      popular: false
    },
    {
      name: "Residential Premium",
      price: "$120",
      description: "Enhanced home connectivity",
      features: [
        "Comprehensive site survey",
        "Premium installation",
        "Advanced network setup",
        "Mesh WiFi configuration",
        "Signal optimization",
        "90-day priority support",
        "Extended warranty",
        "Free follow-up visit"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$150",
      description: "For businesses & enterprises",
      features: [
        "Full site assessment",
        "Enterprise installation",
        "Multi-device network setup",
        "Security configuration",
        "Load balancing setup",
        "24/7 priority support",
        "1-year service contract",
        "Quarterly maintenance",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const installationSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Contact us to discuss your internet needs and location. We'll assess if Starlink is the right solution for you.",
      icon: Phone
    },
    {
      step: 2,
      title: "Site Survey",
      description: "Our technicians visit your location to evaluate the best dish placement and identify any potential obstructions.",
      icon: MapPin
    },
    {
      step: 3,
      title: "Equipment Setup",
      description: "We professionally install and mount your Starlink dish in the optimal position for best signal reception.",
      icon: Satellite
    },
    {
      step: 4,
      title: "Network Configuration",
      description: "Complete setup of your router, WiFi network, and all connected devices with security protocols.",
      icon: Wifi
    },
    {
      step: 5,
      title: "Testing & Optimization",
      description: "Thorough speed testing and signal optimization to ensure you're getting the best possible performance.",
      icon: Zap
    },
    {
      step: 6,
      title: "Training & Handover",
      description: "We train you on using the Starlink app, troubleshooting basics, and provide ongoing support information.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-green-900 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-yellow-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 px-4 py-2 rounded-full mb-6">
                <Satellite className="text-yellow-400" size={20} />
                <span className="text-yellow-300 font-semibold">Starlink Installation</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                High-Speed Satellite Internet 
                <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent"> Anywhere in Zimbabwe</span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8">
                Professional Starlink installation and support services. Get connected to the world's most advanced satellite internet with our expert team.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Wifi, text: "Up to 200+ Mbps" },
                  { icon: Clock, text: "Same-day installation" },
                  { icon: Shield, text: "Professional setup" },
                  { icon: Wrench, text: "24/7 Support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="text-yellow-400" size={20} />
                    <span className="text-green-100">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold">
                    View Pricing
                  </Button>
                </a>
                <a href="tel:+2638677211025">
                  <Button size="lg" variant="outline" className="border-yellow-400 text-white hover:bg-yellow-400 hover:text-black">
                    <Phone className="mr-2" size={18} />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop"
                alt="Starlink Satellite"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl p-4 shadow-xl">
                <p className="text-black font-bold text-lg">Starting from</p>
                <p className="text-3xl font-bold text-black">$80</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-700 to-green-700 bg-clip-text text-transparent mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless, professional installation experience from start to finish
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="text-green-600" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-red-900 via-green-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Installation Packages
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Choose the package that best fits your needs. All prices are for installation services only - Starlink equipment purchased separately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${pkg.popular ? 'border-2 border-yellow-400 shadow-2xl scale-105' : 'border-green-200'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">USD</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+2638677211025">
                    <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black' : 'bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white'}`}>
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-green-100 mb-4">Need a custom solution for your business?</p>
            <a href="mailto:sales@techflow.co.zw">
              <Button variant="outline" className="border-yellow-400 text-white hover:bg-yellow-400 hover:text-black">
                <Mail className="mr-2" size={18} />
                Contact for Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Ready for High-Speed Internet?</h3>
          <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto">
            Get connected today with professional Starlink installation from TechFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2638677211025">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                <Phone className="mr-2" size={18} />
                Call: +2638677211025
              </Button>
            </a>
            <a href="mailto:sales@techflow.co.zw">
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                <Mail className="mr-2" size={18} />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Starlink;
