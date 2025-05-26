
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available"
    },
    {
      icon: Target,
      value: "1000+",
      label: "Projects Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About TechFlow</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                TechFlow is Zimbabwe's leading technology solutions provider, specializing in innovative 
                digital transformation services. With over a decade of experience, we've helped hundreds 
                of businesses across various industries achieve their technology goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team of expert developers, designers, and consultants work tirelessly to deliver 
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
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-blue-900" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6 text-blue-100">
                  Let's discuss how our technology solutions can help you achieve your goals.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50"
                >
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
