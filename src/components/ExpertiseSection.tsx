import { motion } from "framer-motion";
import { Target, TrendingUp, Cpu, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategic Leadership",
    skills: ["Project Management", "Team Management", "Compliance & QA", "Operations"],
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    skills: ["B2B/B2C Sales", "Client Acquisition", "Closing Strategies", "Lead Funnels"],
  },
  {
    icon: Cpu,
    title: "Tech & Innovation",
    skills: ["AI Automation", "Machine Learning", "CRM Integration", "Web & SEO"],
  },
  {
    icon: Users,
    title: "Human Capital",
    skills: ["Motivational Speaking", "Psychological Asst.", "Customer Service", "Training"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Core Competencies<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic expertise across four essential pillars of modern business leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-hover p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <ul className="space-y-2">
                {pillar.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
