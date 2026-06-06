import { Satellite, Wifi, Radio, Network, Globe2, Shield } from 'lucide-react';
import SolutionPageLayout from '@/components/SolutionPageLayout';

const ConnectivitySolution = () => (
  <SolutionPageLayout
    slug="connectivity"
    eyebrow="Connectivity"
    title="Business Connectivity in Zimbabwe"
    titleAccent="Fibre, Starlink, LTE — always online."
    intro="Multi-ISP redundancy with Liquid Home, TelOne, Telco and Dark Fiber Africa — and Starlink as automatic failover. SD-WAN orchestration keeps every site running."
    metaTitle="Business Internet Zimbabwe | Starlink, Fibre & ISP Redundancy | TechFlow"
    metaDescription="Business internet in Zimbabwe: fibre from Liquid, TelOne, Telco & DFA with Starlink failover and SD-WAN. Guaranteed uptime, installed and supported from Harare."
    keywords="business internet Zimbabwe, Starlink Zimbabwe, ISP reseller Harare, Liquid Home reseller, TelOne reseller, Dark Fiber Africa, SD-WAN Zimbabwe, internet redundancy Zimbabwe"
    features={[
      { icon: Wifi, title: 'Fibre from every major ISP', desc: 'We resell Liquid Home, TelOne, Telco and Dark Fiber Africa — one bill, one accountable partner.' },
      { icon: Satellite, title: 'Starlink failover', desc: 'Low-orbit satellite as automatic backup so your business stays online when fibre goes down.' },
      { icon: Globe2, title: 'SD-WAN orchestration', desc: 'Intelligent multi-link routing that load-balances traffic and fails over in seconds.' },
      { icon: Radio, title: 'LTE / 5G backup', desc: 'Wireless tertiary failover for branches, pop-ups and remote sites.' },
      { icon: Network, title: 'Site-to-site networking', desc: 'MPLS, IPsec VPN and SD-WAN tunnels between HQ, branches and the cloud.' },
      { icon: Shield, title: '24/7 NOC monitoring', desc: 'Proactive link monitoring and circuit-management so you hear about outages before customers do.' },
    ]}
    outcomes={[
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '<30s', label: 'Failover Time' },
      { value: '4+', label: 'ISP Partners' },
      { value: 'Nationwide', label: 'Coverage' },
    ]}
    industries={['Logistics', 'Mining', 'Banking', 'Hospitality', 'Retail Chains', 'Construction', 'Agriculture', 'NGOs']}
    faqs={[
      { q: 'How long does Starlink installation take?', a: 'Most business installations are completed in a single day — mount, cable run, router integration and SD-WAN configuration.' },
      { q: 'Can you take over our existing fibre contracts?', a: 'Yes — we manage circuits from any major Zimbabwean ISP and handle escalations on your behalf.' },
      { q: 'How does the failover actually work?', a: 'Our SD-WAN edge continuously probes each link. When latency or loss crosses thresholds, traffic moves to a healthy link in seconds — no manual switching.' },
      { q: 'Do you support remote sites without fibre?', a: 'Absolutely. Starlink + LTE is our standard pattern for mines, lodges, farms and remote project offices.' },
    ]}
  />
);
export default ConnectivitySolution;