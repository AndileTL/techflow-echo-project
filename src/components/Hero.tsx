import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Cpu, Network, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white py-24 overflow-hidden">
      {/* Modern animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 2026 Welcome Banner */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
            <Rocket className="text-accent animate-bounce" size={22} />
            <span className="text-lg font-semibold bg-gradient-to-r from-accent via-white to-secondary bg-clip-text text-transparent">
              Welcome to 2026 — Let's Build Something Amazing!
            </span>
            <Rocket className="text-accent animate-bounce" size={22} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2 text-secondary">
              <Zap className="animate-pulse" size={20} />
              <span className="text-sm uppercase tracking-widest font-medium">Next-Gen Technology</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight">
              Innovative Technology 
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent"> Solutions</span> 
              <br />for Your Business
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-white/80 leading-relaxed max-w-xl">
              We provide cutting-edge technology solutions to help your business grow, 
              streamline operations, and stay ahead of the competition in today's digital world.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg px-8"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy transition-all duration-300 backdrop-blur-sm text-lg px-8"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-8">
              {[
                { icon: CheckCircle, text: "24/7 Support" },
                { icon: Cpu, text: "Expert Team" },
                { icon: Network, text: "Proven Results" },
                { icon: Zap, text: "Custom Solutions" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} />
                  </div>
                  <span className="font-medium group-hover:text-accent transition-colors duration-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-md border border-white/20">
              <div className="bg-white rounded-2xl p-8 text-foreground shadow-inner">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Why Choose TechFlow?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Industry-leading expertise in technology solutions",
                    "Customized approach for every client's unique needs",
                    "Ongoing support and maintenance services",
                    "Competitive pricing with no hidden costs"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  {[
                    { value: "500+", label: "Clients" },
                    { value: "99%", label: "Uptime" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
