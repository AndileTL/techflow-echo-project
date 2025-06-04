
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Target, Zap, Shield, ArrowRight, Play } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Zimbabwe",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      description: "Proven track record in tech solutions",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: Target,
      value: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered solutions",
      color: "bg-orange-50 border-orange-100"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology solutions that push boundaries and create new possibilities for your business.",
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable service you can trust, with proven track record of delivering consistent results.",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term relationships with clients, working together to achieve sustainable growth and success.",
      color: "bg-pink-50 border-pink-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-gray-200">
                <Users className="text-gray-600" size={16} />
                <span className="text-gray-700 font-medium text-sm">About TechFlow</span>
              </div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Leading Technology Solutions in Zimbabwe
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  TechFlow is Zimbabwe's premier technology solutions provider, specializing in innovative 
                  digital transformation services. With over a decade of experience, we've helped hundreds 
                  of businesses across various industries achieve their technology goals.
                </p>
                
                <p>
                  Our team of expert developers, consultants, and technicians work tirelessly to deliver 
                  cutting-edge solutions that drive growth, improve efficiency, and create competitive advantages 
                  for our clients.
                </p>
                
                <p>
                  We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. 
                  Every project we undertake is an opportunity to showcase our expertise and build lasting 
                  partnerships with our clients.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full">
                <Play size={16} className="mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
                View Portfolio
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${stat.color} border-2`}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <stat.icon className="text-gray-700" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <div className="max-w-3xl mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The principles that guide everything we do and define our commitment to excellence in delivering 
              transformative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${value.color} border-2`}>
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <value.icon className="text-gray-700" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-12 shadow-2xl rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <CardContent className="p-0 text-center relative z-10">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="mb-8 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your goals and drive your business forward 
              in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full shadow-lg"
              >
                <Play size={16} className="mr-2" />
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full"
              >
                Schedule Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
