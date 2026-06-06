import {
  Activity, Shield, Headphones, Server, Users, Wrench,
} from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const ManagedIT = () => (
  <SolutionPageLayout
    slug="managed-it"
    eyebrow="Managed IT Services"
    title="Managed IT Services in Zimbabwe"
    titleAccent="Your outsourced IT department."
    intro="End-to-end IT management with 24/7 monitoring, certified engineers in Harare, and SLA-backed response — so your team stays productive and your systems stay online."
    metaTitle="Managed IT Services Zimbabwe | Harare IT Support | TechFlow"
    metaDescription="Managed IT services in Zimbabwe — 24/7 monitoring, helpdesk, patching, and vendor management from Harare's top-rated IT partner. Get a free assessment."
    keywords="managed IT services Zimbabwe, IT support Harare, outsourced IT Zimbabwe, IT helpdesk Harare, business IT support Zimbabwe"
    features={[
      { icon: Activity, title: '24/7 monitoring & alerting', desc: 'Proactive detection of issues across endpoints, servers and networks before they impact users.' },
      { icon: Headphones, title: 'Multi-channel helpdesk', desc: 'Phone, email, WhatsApp and portal — SLA-backed response within 15 minutes for critical tickets.' },
      { icon: Wrench, title: 'Patch & update management', desc: 'Automated patching for OS, third-party apps, and firmware with controlled rollout windows.' },
      { icon: Shield, title: 'Endpoint security baseline', desc: 'EDR, disk encryption, MFA and conditional access enforced on every managed device.' },
      { icon: Server, title: 'Server & infrastructure care', desc: 'Backup verification, capacity planning, and lifecycle management for physical and cloud workloads.' },
      { icon: Users, title: 'Dedicated vCIO', desc: 'Quarterly business reviews, budget planning and a 12-month technology roadmap.' },
    ]}
    outcomes={[
      { value: '92%', label: 'Less Downtime' },
      { value: '<15min', label: 'Response SLA' },
      { value: '24/7', label: 'NOC Coverage' },
      { value: '500+', label: 'Endpoints Managed' },
    ]}
    industries={['Insurance', 'Banking', 'Healthcare', 'NGOs', 'Manufacturing', 'Retail', 'Education', 'Government']}
    faqs={[
      { q: 'How fast can you onboard our environment?', a: 'A standard onboarding for a 25–100 user organisation takes 2–3 weeks: audit, agent rollout, documentation, knowledge transfer.' },
      { q: 'Do you charge per user or per device?', a: 'Both options are available. Most clients prefer per-user pricing — it’s predictable and scales naturally with the business.' },
      { q: 'Do you replace our internal IT team?', a: 'We complement them. Internal IT focuses on strategy and business apps; we cover infrastructure, monitoring and after-hours support.' },
      { q: 'What happens if our internet goes down?', a: 'Our connectivity service adds Starlink as automatic failover so even ISP outages don’t take your team offline.' },
    ]}
  />
);
export default ManagedIT;