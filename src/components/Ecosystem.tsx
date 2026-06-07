import { motion } from 'framer-motion';
import {
  Satellite, Cloud, Wifi, Network, Camera, Video, Fingerprint,
  Shield, Server, HardDrive, Cloudy, Building2, Cpu,
} from 'lucide-react';

const partners = [
  { name: 'Starlink', icon: Satellite },
  { name: 'Microsoft', icon: Cloud },
  { name: 'MikroTik', icon: Network },
  { name: 'Ubiquiti', icon: Wifi },
  { name: 'Cisco', icon: Cpu },
  { name: 'Hikvision', icon: Camera },
  { name: 'Dahua', icon: Video },
  { name: 'ZKTeco', icon: Fingerprint },
  { name: 'Fortinet', icon: Shield },
  { name: 'VMware', icon: Server },
  { name: 'Sophos', icon: Shield },
  { name: 'Veeam', icon: HardDrive },
  { name: 'Cloudflare', icon: Cloudy },
  { name: 'Azure', icon: Building2 },
];

const Ecosystem = () => (
  <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Ecosystem</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          A best-in-class <span className="gradient-text">technology ecosystem</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          TechFlow partners with globally recognised technology leaders to deliver secure,
          reliable and scalable solutions for <span className="text-foreground font-medium">homes,
          businesses and enterprises</span> across Africa.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -3 }}
            className="group bg-card flex flex-col items-center justify-center gap-3 p-6 sm:p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-500"
          >
            <p.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-display text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {p.name}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Certified engineers · One accountable partner · End-to-end design, deployment and 24/7 support
      </p>
    </div>
  </section>
);

export default Ecosystem;