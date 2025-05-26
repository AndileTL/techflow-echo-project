
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Shield, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our interactions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Our clients' success is our success. We put their needs at the center of everything we do."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative partnerships to achieve great results."
    }
  ];

  const milestones = [
    { year: "2013", event: "TechFlow Technologies Founded", description: "Started our journey in February 2013" },
    { year: "2015", event: "First Major Enterprise Client", description: "Secured our first enterprise-level contract" },
    { year: "2018", event: "Cloud Solutions Launch", description: "Expanded services to include cloud computing" },
    { year: "2020", event: "Digital Transformation Focus", description: "Pivoted to support businesses during digital transformation" },
    { year: "2023", event: "500+ Clients Milestone", description: "Reached over 500 satisfied clients across Zimbabwe" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            About TechFlow Technologies
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading Zimbabwe's digital transformation since 2013, delivering innovative technology solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in February 2013, TechFlow Technologies emerged from a vision to bridge the technology gap 
                in Zimbabwe's business landscape. What started as a small team of passionate technologists has grown 
                into the country's leading provider of comprehensive technology solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past decade, we've helped hundreds of businesses transform their operations, streamline 
                their processes, and achieve unprecedented growth through strategic technology implementations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                  <Calendar className="text-purple-600 mx-auto mb-2" size={24} />
                  <div className="font-bold text-purple-800">Founded</div>
                  <div className="text-gray-600">February 2013</div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                  <MapPin className="text-purple-600 mx-auto mb-2" size={24} />
                  <div className="font-bold text-purple-800">Location</div>
                  <div className="text-gray-600">Zimbabwe</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="TechFlow Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Mission & Goals
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Target className="mr-3" size={32} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg">
                  To empower businesses across Zimbabwe with innovative technology solutions that drive growth, 
                  enhance efficiency, and create sustainable competitive advantages in the digital economy.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center text-gray-800">
                  <Award className="mr-3 text-purple-600" size={32} />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-gray-600">
                  To be Zimbabwe's most trusted technology partner, recognized for delivering transformative 
                  solutions that enable businesses to thrive in an increasingly digital world.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-white shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">Our Strategic Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Client Excellence</h4>
                  <p className="text-gray-600 text-sm">Deliver exceptional value and service to every client</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Innovation Leadership</h4>
                  <p className="text-gray-600 text-sm">Stay at the forefront of technology trends and solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-purple-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Community Impact</h4>
                  <p className="text-gray-600 text-sm">Contribute to Zimbabwe's digital transformation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core principles that guide our decisions and define our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-purple-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">Key milestones in our company's growth and evolution.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-8"></div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{milestone.event}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent">
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Service Agreement</h4>
                  <p>All services provided by TechFlow Technologies are subject to our standard service agreement. Clients are required to review and accept terms before project commencement.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Payment Terms</h4>
                  <p>Payment terms are typically 30 days from invoice date unless otherwise agreed in writing. Late payments may incur additional charges as specified in the service agreement.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Intellectual Property</h4>
                  <p>Custom solutions developed for clients remain the property of the client upon full payment. TechFlow Technologies retains rights to general methodologies and frameworks.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Confidentiality</h4>
                  <p>We maintain strict confidentiality regarding all client information and business operations. Non-disclosure agreements are available upon request.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Support and Maintenance</h4>
                  <p>Support and maintenance terms vary by service type and are clearly outlined in individual service agreements. Emergency support is available for critical systems.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how TechFlow Technologies can help transform your business with our proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Contact Us Today
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

export default About;
