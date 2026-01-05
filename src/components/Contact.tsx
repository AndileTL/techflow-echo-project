import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || null,
      company: null,
      service: formData.get('subject') as string || null,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["26 Dieppe Avenue", "New Cranborne Park", "Harare, Zimbabwe"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+2638677211025"]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["0779822400"],
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sales@techflow.co.zw", "support@techflow.co.zw"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-navy via-primary/90 to-secondary/80 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
              <MessageSquare className="text-secondary" size={20} />
              <span className="text-white/90 font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent">Contact Us</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We proudly serve clients across Zimbabwe and internationally, providing world-class technology solutions globally.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <StaggerContainer className="lg:col-span-1 space-y-6" staggerDelay={0.1}>
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${(info as any).isWhatsApp ? 'bg-gradient-to-r from-whatsapp to-whatsapp-dark' : 'bg-gradient-to-r from-primary to-secondary'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          (info as any).isWhatsApp ? (
                            <a key={idx} href="https://wa.me/263779822400" target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:text-whatsapp/80 text-sm block">{detail}</a>
                          ) : (
                            <p key={idx} className="text-white/70 text-sm">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Form */}
          <ScrollAnimation direction="right" delay={0.2} className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Send className="text-secondary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                        placeholder="+263 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-secondary resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
