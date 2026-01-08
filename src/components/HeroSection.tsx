import { motion } from "framer-motion";
import fahadPortrait from "@/assets/fahad-portrait.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-0 relative">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-[3rem] blur-3xl transform scale-110" />
              <img
                src={fahadPortrait}
                alt="Fahad Ali - CEO & Founder"
                className="relative z-10 w-full max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Typography */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Fahad Ali<span className="text-primary">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-xl md:text-2xl font-medium text-primary"
            >
              CEO & Founder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Driving business evolution through Tritanium Global and NexLeed. Bridging the gap between executive leadership, BPO excellence, and AI innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* RESTORED SCROLL LINK WITH NEW TEXT */}
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center"
              >
                Send a Message
              </a>

              <a
                href="#ventures"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-foreground border-2 border-border rounded-2xl transition-all duration-300 hover:border-primary hover:text-primary"
              >
                View Ventures
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
