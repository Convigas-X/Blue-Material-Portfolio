import { motion } from "framer-motion";
import { Building2, Sparkles, ExternalLink } from "lucide-react";

const VenturesSection = () => {
  return (
    <section id="ventures" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Business Ventures<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading innovative enterprises at the intersection of BPO excellence and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Primary Venture - Tritanium Global */}
          <motion.a
            href="https://tritaniumglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="venture-card-primary group cursor-pointer block h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <ExternalLink className="w-5 h-5 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-medium mb-4">
              Parent Company
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tritanium Global
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              A premier B2B BPO firm operating physically in Pakistan with corporate headquarters in Austin, Texas. Delivering world-class outsourcing solutions to global enterprises.
            </p>
          </motion.a>

          {/* Secondary Venture - NexLeed */}
          <motion.a
            href="https://nexleed.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="venture-card-secondary group cursor-pointer block h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Subsidiary
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              NexLeed
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The technology arm of Tritanium Global. Focused on Realtor lead generation, Local SEO, AI automation, and CRM solutions for modern businesses.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
