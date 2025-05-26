
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Innovative Technology 
              <span className="text-blue-300"> Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We provide cutting-edge technology solutions to help your business grow, 
              streamline operations, and stay ahead of the competition in today's digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 text-gray-800">
                <h3 className="text-2xl font-bold mb-4">Why Choose TechFlow?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Industry-leading expertise in technology solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Customized approach for every client's unique needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Ongoing support and maintenance services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Competitive pricing with no hidden costs</span>
                  </li>
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
