
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Cpu, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-purple-300">
              <Zap className="animate-pulse" size={20} />
              <span className="text-sm uppercase tracking-wider">Next-Gen Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Innovative Technology 
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"> Solutions</span> 
              for Your Business
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              We provide cutting-edge technology solutions to help your business grow, 
              streamline operations, and stay ahead of the competition in today's digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 animate-pulse" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-300 text-white hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {[
                { icon: CheckCircle, text: "24/7 Support" },
                { icon: Cpu, text: "Expert Team" },
                { icon: Network, text: "Proven Results" },
                { icon: Zap, text: "Custom Solutions" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <item.icon className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="group-hover:text-purple-200 transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-purple-300/20 hover:shadow-purple-500/25 transition-all duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-gray-800 shadow-inner">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Why Choose TechFlow?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Industry-leading expertise in technology solutions",
                    "Customized approach for every client's unique needs",
                    "Ongoing support and maintenance services",
                    "Competitive pricing with no hidden costs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                      <span className="group-hover:text-purple-700 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
