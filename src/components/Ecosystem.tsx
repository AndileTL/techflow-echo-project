import { motion } from 'framer-motion';

const partners = [
  'Microsoft 365', 'Azure', 'Starlink', 'MikroTik',
  'Ubiquiti', 'Sophos', 'Zabbix', 'VMware',
  'Nextcloud', '3CX', 'Veeam', 'Fortinet',
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
          We integrate and operate the platforms enterprise teams trust — so you get proven
          technology, certified expertise, and one accountable partner.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {partners.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group bg-card flex items-center justify-center p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-500"
          >
            <span className="font-display text-base sm:text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {p}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Ecosystem;