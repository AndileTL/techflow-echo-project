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
      <section className="py-20 bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Satellite className="text-accent" size={20} />
                <span className="text-white/90 font-semibold">Starlink Installation</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                High-Speed Satellite Internet 
                <span className="bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent"> Anywhere in Zimbabwe</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
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
                    <item.icon className="text-accent" size={20} />
                    <span className="text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    View Pricing
                  </Button>
                </a>
                <a href="tel:+2638677211025">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
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
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent to-secondary rounded-xl p-4 shadow-xl">
                <p className="text-accent-foreground font-bold text-lg">Starting from</p>
                <p className="text-3xl font-bold text-accent-foreground">$80</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A seamless, professional installation experience from start to finish
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                    <step.icon className="text-secondary" size={28} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Installation Packages
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the package that best fits your needs. All prices are for installation services only - Starlink equipment purchased separately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden bg-card ${pkg.popular ? 'border-2 border-accent shadow-2xl scale-105' : 'border-border'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="text-secondary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+2638677211025">
                    <Button className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground'}`}>
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/80 mb-4">Need a custom solution for your business?</p>
            <a href="mailto:sales@techflow.co.zw">
              <Button variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Mail className="mr-2" size={18} />
                Contact for Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent via-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready for High-Speed Internet?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get connected today with professional Starlink installation from TechFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2638677211025">
              <Button size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
                <Phone className="mr-2" size={18} />
                Call: +2638677211025
              </Button>
            </a>
            <a href="mailto:sales@techflow.co.zw">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
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
