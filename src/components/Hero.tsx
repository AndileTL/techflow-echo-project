
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Cpu, Network, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Technology Solutions</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                TechFlow
                <br />
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  Technology Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Our innovative solutions drive growth and streamline operations in the digital landscape. Transforming businesses through cutting-edge biotechnology and enhanced efficiency for a better future.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                Discover Solutions
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-purple-200 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-blue-200 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-green-200 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Meet Our Team</span>
                  <div className="flex items-center space-x-1">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Right Column - Cards Layout */}
          <div className="space-y-6">
            {/* Main Feature Card */}
            <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Advancing Technology Innovation</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Transforming industries through our comprehensive biotechnology solutions. We drive sustainable innovation and efficiency for a better future.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold">18M</div>
                    <div className="text-blue-200 text-sm">Research Solutions Deployed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">12K</div>
                    <div className="text-blue-200 text-sm">Successful Implementations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Research Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Research and Expertise</h4>
                <p className="text-gray-600 text-sm mb-4">Advanced solutions for complex challenges</p>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Play size={14} className="mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Innovation Card */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-semibold text-gray-900 mb-2">Advancing Biotechnology Innovation</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Transforming industries through cutting-edge biotechnology solutions that drive sustainable growth.
                </p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Play className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Advancing Sustainable Biotech</h4>
                  <p className="text-gray-300 text-sm">Our solutions harness the power of biotechnology to create sustainable innovations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
