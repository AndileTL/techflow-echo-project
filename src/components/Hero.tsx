
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Cpu, Network, Sparkles } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-900 via-green-900 to-red-800 text-white py-20 overflow-hidden">
      {/* Christmas animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-1/4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Snowflakes decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Season's Greetings Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-400/30 mb-4">
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
            <span className="text-yellow-300 font-semibold">🎄 Season's Greetings & Happy New Year 2025! 🎆</span>
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
          </div>
          
          {/* New Year Countdown */}
          {(timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) && (
            <div className="bg-gradient-to-r from-red-600/30 to-green-600/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-yellow-300 mb-4">🎆 Countdown to 2025 🎆</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-yellow-300 uppercase tracking-wider mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-green-300">
              <Zap className="animate-pulse" size={20} />
              <span className="text-sm uppercase tracking-wider">Next-Gen Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Innovative Technology 
              <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent"> Solutions</span> 
              for Your Business
            </h1>
            
            <p className="text-xl text-green-100 leading-relaxed">
              We provide cutting-edge technology solutions to help your business grow, 
              streamline operations, and stay ahead of the competition in today's digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 animate-pulse" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-yellow-400 text-white hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 backdrop-blur-sm"
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
                  <item.icon className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="group-hover:text-yellow-200 transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-red-600/80 to-green-600/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-yellow-300/20 hover:shadow-yellow-500/25 transition-all duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-gray-800 shadow-inner">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
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
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={16} />
                      <span className="group-hover:text-red-700 transition-colors duration-300">{item}</span>
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
