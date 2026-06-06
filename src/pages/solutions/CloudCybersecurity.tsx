import { Cloud, Lock, ShieldCheck, KeyRound, FileCheck, AlertTriangle } from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const CloudCybersecurity = () => (
  <SolutionPageLayout
    slug="cloud-cybersecurity"
    eyebrow="Cloud & Cybersecurity"
    title="Cloud & Cybersecurity"
    titleAccent="Secure-by-design infrastructure."
    intro="Microsoft 365, Azure, secure email, identity hardening and continuous threat monitoring — designed and operated by certified engineers in Zimbabwe."
    metaTitle="Cloud & Cybersecurity Zimbabwe | Microsoft 365 & Azure | TechFlow"
    metaDescription="Cloud migration, Microsoft 365, Azure, MFA, EDR and cybersecurity services in Zimbabwe. Harden identity, secure email, and stay compliant — operated from Harare."
    keywords="cybersecurity Zimbabwe, Microsoft 365 Zimbabwe, Azure Zimbabwe, cloud migration Harare, email security Zimbabwe, MFA Zimbabwe"
    features={[
      { icon: Cloud, title: 'Microsoft 365 & Azure', desc: 'Tenant setup, migration, licensing optimisation, Teams telephony and Intune device management.' },
      { icon: KeyRound, title: 'Identity & MFA', desc: 'Conditional access, passwordless sign-in, and Entra ID hardening across every app.' },
      { icon: ShieldCheck, title: 'Endpoint detection & response', desc: 'Next-gen EDR with 24/7 SOC monitoring, threat hunting and automated containment.' },
      { icon: Lock, title: 'Email & data protection', desc: 'Anti-phishing, DLP, encryption, and DMARC/SPF/DKIM to keep your brand out of the spam folder.' },
      { icon: AlertTriangle, title: 'Vulnerability management', desc: 'Continuous scanning, prioritised remediation and monthly executive risk reporting.' },
      { icon: FileCheck, title: 'Backup & disaster recovery', desc: 'Immutable backups for M365, servers and SaaS — tested restores, defined RPO/RTO.' },
    ]}
    outcomes={[
      { value: '100%', label: 'MFA Coverage' },
      { value: '24/7', label: 'SOC Monitoring' },
      { value: '99.9%', label: 'M365 Uptime' },
      { value: '0', label: 'Major Incidents' },
    ]}
    industries={['Financial Services', 'NGOs', 'Healthcare', 'Legal', 'Manufacturing', 'Retail', 'Government']}
    faqs={[
      { q: 'Do you handle Microsoft 365 licensing?', a: 'Yes — we are an authorised reseller and can bill licensing alongside managed services on one invoice.' },
      { q: 'Can you migrate us from Google Workspace?', a: 'Yes. We run mailbox, drive and contacts migrations with zero data loss and minimal user disruption.' },
      { q: 'How do you protect against ransomware?', a: 'Defence-in-depth: EDR, application allow-listing, immutable backups, network segmentation and continuous user awareness training.' },
      { q: 'Are you compliant with POPIA / GDPR?', a: 'Our service is designed around POPIA and GDPR best practice. We can produce evidence packs for audits on request.' },
    ]}
  />
);
export default CloudCybersecurity;