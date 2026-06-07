import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { contactSchema } from '@/lib/validation';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [customerType, setCustomerType] = useState<string>('Business Customer');
  const [customerStatus, setCustomerStatus] = useState<string>('New Customer');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: (fd.get('name') as string) ?? '',
      email: (fd.get('email') as string) ?? '',
      phone: (fd.get('phone') as string) ?? '',
      company: (fd.get('company') as string) ?? '',
      service: (fd.get('service') as string) ?? '',
      message: (fd.get('message') as string) ?? '',
    };
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error('Please fix the highlighted fields');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        company: parsed.data.company || null,
        service: parsed.data.service || null,
        message: parsed.data.message,
        customer_type: customerType,
        customer_status: customerStatus,
        source: 'contact_form',
      };
      const { error } = await supabase.from('contact_submissions').insert([payload]);
      if (error) throw error;

      // Build a WhatsApp follow-up link prefilled with the user's context
      const waText = encodeURIComponent(
        `Hi TechFlow, I'm ${parsed.data.name}${
          parsed.data.company ? ` from ${parsed.data.company}` : ''
        }. I just sent an enquiry${
          parsed.data.service ? ` about ${parsed.data.service}` : ''
        } and would like to follow up.`,
      );
      const waUrl = `https://wa.me/263779822400?text=${waText}`;

      toast.success('Thank you for contacting TechFlow. Our team will get back to you shortly.', {
        duration: 8000,
        action: {
          label: 'WhatsApp us',
          onClick: () => window.open(waUrl, '_blank', 'noopener'),
        },
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('Failed to send. Please try again or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const errClass = (k: string) =>
    errors[k] ? 'border-destructive focus:border-destructive' : 'focus:border-accent';

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-brand-magenta/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Let's build what's next.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Book a free consultation. We'll map your environment, identify quick wins,
              and design a roadmap tailored to your business.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Visit us</div>
                  <div className="text-white/60 mt-0.5">13 Audley Street, Carneborne Park, Harare</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Call us</div>
                  <a href="tel:+2638677211025" className="text-white/60 hover:text-white mt-0.5 block">+263 8677 211 025</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-whatsapp" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href="https://wa.me/263779822400" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white mt-0.5 block">0779 822 400</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:sales@techflow.co.zw" className="text-white/60 hover:text-white mt-0.5 block">sales@techflow.co.zw</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-white/60 mt-0.5">Mon–Fri 09:00–18:00 · Sat 08:00–13:00</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/80">Full name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${errClass('name')}`} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80">Company</Label>
                    <Input id="company" name="company" placeholder="Your company" className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${errClass('company')}`} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${errClass('email')}`} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+263 ..." className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${errClass('phone')}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/80">Service interest</Label>
                  <Input id="service" name="service" placeholder="e.g. Managed IT, Starlink, Microsoft 365" className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${errClass('service')}`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/80">Message *</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none ${errClass('message')}`} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" disabled={submitting} className="rounded-full bg-white text-brand-navy hover:bg-accent font-semibold px-7 h-12 flex-1">
                    {submitting ? 'Sending...' : (<>Send message<Send size={16} className="ml-2" /></>)}
                  </Button>
                  <a href="https://wa.me/263779822400" target="_blank" rel="noopener noreferrer" className="rounded-full inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 px-6 h-12 text-sm font-semibold">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
