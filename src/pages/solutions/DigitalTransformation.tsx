import { Zap, Workflow, Database, BarChart3, Bot, Layers } from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const DigitalTransformation = () => (
  <SolutionPageLayout
    slug="digital-transformation"
    eyebrow="Digital Transformation"
    title="Digital Transformation"
    titleAccent="Modernise how your business runs."
    intro="From paper to platform: process automation, custom software, data and AI — built for African businesses that want to move faster without breaking what works."
    metaTitle="Digital Transformation Zimbabwe | Process Automation | TechFlow"
    metaDescription="Digital transformation services in Zimbabwe — process automation, custom software, data platforms and AI workflows. Modernise legacy systems with TechFlow."
    keywords="digital transformation Zimbabwe, process automation Zimbabwe, custom software Harare, business intelligence Zimbabwe, AI Zimbabwe, workflow automation"
    features={[
      { icon: Workflow, title: 'Process automation', desc: 'Automate approvals, onboarding, invoicing and reporting with Power Automate, n8n or custom workflows.' },
      { icon: Layers, title: 'Custom software', desc: 'Web and mobile apps tailored to your workflow — designed, built and supported in Zimbabwe.' },
      { icon: Database, title: 'Data platforms', desc: 'Unified data warehouses on Azure or open-source stacks for a single source of truth.' },
      { icon: BarChart3, title: 'Business intelligence', desc: 'Power BI dashboards that give leadership clarity on revenue, operations and risk in real time.' },
      { icon: Bot, title: 'AI & assistants', desc: 'Practical AI: document extraction, support copilots, knowledge search — measured by outcomes, not hype.' },
      { icon: Zap, title: 'Legacy modernisation', desc: 'Lift, refactor or replace legacy apps with a phased plan that protects business continuity.' },
    ]}
    outcomes={[
      { value: '40%', label: 'Faster Operations' },
      { value: '3x', label: 'Reporting Speed' },
      { value: '12wk', label: 'Avg Time to Value' },
      { value: '100%', label: 'Locally Supported' },
    ]}
    industries={['Insurance', 'Banking', 'Manufacturing', 'NGOs', 'Logistics', 'Retail', 'Education', 'Real Estate']}
    faqs={[
      { q: 'Where do most projects start?', a: 'A 2-week discovery: we shadow your team, map current processes, identify quick wins and propose a phased roadmap with clear ROI.' },
      { q: 'Do you build on Microsoft only?', a: 'No — we choose stacks pragmatically. Power Platform for SMEs, custom React/Node for product-grade apps, open-source when it fits.' },
      { q: 'How do you handle change management?', a: 'Every rollout includes training, documentation and a 30-day hypercare period to lock in adoption.' },
      { q: 'Can you integrate with our ERP?', a: 'Yes — we have integrations with Sage, SAP B1, Pastel, Odoo and most modern SaaS via REST/webhooks.' },
    ]}
  />
);
export default DigitalTransformation;