import { Headset, PhoneCall, BarChart3, Users, Cloud, Route } from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const ContactCenter = () => (
  <SolutionPageLayout
    slug="contact-center"
    eyebrow="Contact Center Operations"
    title="Contact Center Operations"
    titleAccent="Every call answered, every time."
    intro="We design, deploy and support hosted PBX and VoIP contact centre platforms — from number provisioning and call routing to agent training and go-live support."
    metaTitle="Contact Centre & VoIP Solutions Zimbabwe | Hosted PBX | TechFlow"
    metaDescription="Contact centre and VoIP solutions in Zimbabwe: hosted PBX, IVR, call routing, recording and reporting — deployed and supported by TechFlow engineers in Harare."
    keywords="contact centre Zimbabwe, VoIP Zimbabwe, hosted PBX Harare, call centre solutions Zimbabwe, IVR Zimbabwe"
    features={[
      { icon: PhoneCall, title: 'Hosted PBX & VoIP', desc: 'Cloud telephony with local numbers, extensions and softphones for office and remote agents.' },
      { icon: Route, title: 'IVR & call routing', desc: 'Skills-based routing, queues, callbacks and after-hours handling designed around your workflow.' },
      { icon: BarChart3, title: 'Reporting & recording', desc: 'Call recording, wallboards and daily performance reporting on answer rates and handling time.' },
      { icon: Users, title: 'Agent onboarding', desc: 'Hands-on training, scripts and supervisor coaching so the platform is used properly from day one.' },
      { icon: Cloud, title: 'Microsoft Teams telephony', desc: 'Direct Routing for organisations that want calls inside the tools staff already use.' },
      { icon: Headset, title: 'Ongoing operations support', desc: 'Moves, adds, changes and 24/7 escalation — we operate the platform so your team can focus on customers.' },
    ]}
    outcomes={[
      { value: '38', label: 'Sites Unified' },
      { value: '24/7', label: 'Support Coverage' },
      { value: '<1 day', label: 'Change Requests' },
      { value: '100%', label: 'Calls Recorded' },
    ]}
    process={[
      { title: 'Discovery', desc: 'We map call volumes, teams, hours and the customer journey you want to deliver.' },
      { title: 'Design', desc: 'Routing plan, number strategy, integrations and hardware/softphone selection.' },
      { title: 'Deploy', desc: 'Provisioning, configuration, agent training and a supervised go-live window.' },
      { title: 'Operate', desc: 'Monitoring, reporting reviews and continuous tuning of queues and scripts.' },
    ]}
    whoFor={[
      'Retail and distribution groups running multi-branch support lines',
      'Insurers, medical aid and financial services teams handling regulated calls',
      'ISPs and utilities with high inbound support volumes',
      'Growing SMEs replacing analogue lines with cloud telephony',
    ]}
    industries={['Insurance', 'Retail', 'Financial Services', 'ISPs & Carriers', 'Healthcare', 'Logistics', 'NGOs']}
    faqs={[
      { q: 'Do we need new handsets?', a: 'Not necessarily. Many IP handsets can be re-provisioned, and softphones on laptops or mobiles work for remote agents.' },
      { q: 'Can we keep our existing numbers?', a: 'In most cases yes — we handle porting with the carrier and run both services in parallel until cutover.' },
      { q: 'Does it work when the internet drops?', a: 'We pair the platform with our multi-ISP and Starlink failover so calls keep flowing during an outage.' },
      { q: 'Can it integrate with our CRM?', a: 'Yes — click-to-dial, screen pops and call logging integrate with most modern CRMs via API.' },
    ]}
  />
);
export default ContactCenter;
