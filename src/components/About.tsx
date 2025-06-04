
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Zimbabwe"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      description: "Proven track record in tech solutions"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: Target,
      value: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered solutions"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable service you can trust"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term relationships with clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
                <Users className="text-purple-600" size={20} />
                <span className="text-purple-800 font-semibold">About TechFlow</span>
              </div>
              
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
                Leading Technology Solutions in Zimbabwe
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                TechFlow is Zimbabwe's premier technology solutions provider, specializing in innovative 
                digital transformation services. With over a decade of experience, we've helped hundreds 
                of businesses across various industries achieve their technology goals.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team of expert developers, consultants, and technicians work tirelessly to deliver 
                cutting-edge solutions that drive growth, improve efficiency, and create competitive advantages 
                for our clients.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. 
                Every project we undertake is an opportunity to showcase our expertise and build lasting 
                partnerships with our clients.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white transition-all duration-300">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-purple-100 group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                      <stat.icon className="text-purple-600 group-hover:text-white transition-colors duration-500" size={24} />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-sm">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and define our commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-purple-100 group">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  <value.icon className="text-purple-600 group-hover:text-white transition-colors duration-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 shadow-2xl">
          <CardContent className="p-0 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-6 text-purple-100 text-lg max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
