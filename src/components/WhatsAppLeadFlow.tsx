import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Check, Home, Briefcase, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { leadSchema } from '@/lib/validation';

const HOME_SERVICES = [
  'Starlink Installation', 'Home WiFi Setup', 'CCTV Installation', 'Solar Solutions',
  'Network Troubleshooting', 'IT Support', 'Website Design', 'Cybersecurity',
];
const BUSINESS_SERVICES = [
  'Managed IT Services', 'Starlink Business', 'SD-WAN Solutions', 'Enterprise Networking',
  'CCTV & Surveillance', 'Access Control', 'Biometrics', 'Cybersecurity',
  'Cloud Solutions', 'Microsoft 365', 'Backup & Disaster Recovery',
  'Website Development', 'ISP Solutions',
];

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const WhatsAppLeadFlow = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState(1);
  const [customerType, setCustomerType] = useState<'Home Customer' | 'Business Customer' | null>(null);
  const [customerStatus, setCustomerStatus] = useState<'New Customer' | 'Existing Customer' | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setStep(1); setCustomerType(null); setCustomerStatus(null);
    setServices([]); setForm({ name: '', company: '', email: '', phone: '', notes: '' });
    setErrors({});
  };

  const close = () => { onOpenChange(false); setTimeout(reset, 250); };

  const toggleService = (s: string) => {
    setServices((cur) => cur.includes(s) ? cur.filter(x => x !== s) : [...cur, s]);
  };

  const submit = async () => {
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = String(i.path[0]); if (!fe[k]) fe[k] = i.message; }
      setErrors(fe);
      return;
    }
    setSubmitting(true);
    try {
      const message =
        `TechFlow Service Enquiry\n\n` +
        `Customer Type: ${customerType}\n` +
        `Status: ${customerStatus}\n\n` +
        `Services Required:\n${services.map(s => `- ${s}`).join('\n') || '- (not specified)'}\n\n` +
        `Name: ${form.name}\n` +
        (form.company ? `Company: ${form.company}\n` : '') +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        (form.notes ? `\nAdditional Notes:\n${form.notes}\n` : '');

      await supabase.from('contact_submissions').insert([{
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company || null,
        service: services[0] || null,
        services,
        message,
        customer_type: customerType,
        customer_status: customerStatus,
        source: 'whatsapp_flow',
      }]);

      const url = `https://wa.me/263779822400?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener');
      toast.success('Thank you — opening WhatsApp now.');
      close();
    } catch (e) {
      console.error(e);
      toast.error('Could not submit — please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const serviceList = customerType === 'Home Customer' ? HOME_SERVICES : BUSINESS_SERVICES;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) close(); else onOpenChange(true); }}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-whatsapp" />
            Chat with TechFlow
          </DialogTitle>
          <DialogDescription>Step {step} of 4 — we'll prepare a tailored WhatsApp message.</DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-medium">Who are you looking for services for?</p>
            <div className="grid grid-cols-2 gap-3">
              {[{ v: 'Home Customer', icon: Home }, { v: 'Business Customer', icon: Briefcase }].map(({ v, icon: Icon }) => (
                <Card
                  key={v}
                  onClick={() => { setCustomerType(v as any); setStep(2); }}
                  className="cursor-pointer p-5 hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <Icon className="h-7 w-7 mx-auto text-primary mb-2" />
                  <div className="font-display font-semibold">{v}</div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm font-medium">Are you a new or existing customer?</p>
            <div className="grid grid-cols-2 gap-3">
              {['New Customer', 'Existing Customer'].map((v) => (
                <Card
                  key={v}
                  onClick={() => { setCustomerStatus(v as any); setStep(3); }}
                  className="cursor-pointer p-5 hover:border-primary hover:shadow-md transition-all text-center font-display font-semibold"
                >
                  {v}
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm font-medium">Which services do you need? (select all that apply)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
              {serviceList.map((s) => (
                <label key={s} className="flex items-center gap-2 p-2 rounded-md border border-border hover:bg-muted/50 cursor-pointer text-sm">
                  <Checkbox checked={services.includes(s)} onCheckedChange={() => toggleService(s)} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(2)}><ArrowLeft className="h-4 w-4 mr-1" />Back</Button>
              <Button onClick={() => setStep(4)} disabled={services.length === 0}>Next<ArrowRight className="h-4 w-4 ml-1" /></Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="lf-name">Full name *</Label>
                <Input id="lf-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="lf-company">Company {customerType === 'Home Customer' && <span className="text-muted-foreground">(optional)</span>}</Label>
                <Input id="lf-company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="lf-email">Email *</Label>
                <Input id="lf-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="lf-phone">Phone *</Label>
                <Input id="lf-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+263..." />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="lf-notes">Additional notes</Label>
              <Textarea id="lf-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </div>
            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(3)}><ArrowLeft className="h-4 w-4 mr-1" />Back</Button>
              <Button onClick={submit} disabled={submitting} className="bg-whatsapp hover:bg-whatsapp-dark text-white">
                {submitting ? 'Sending...' : (<><Check className="h-4 w-4 mr-1" />Send via WhatsApp</>)}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppLeadFlow;