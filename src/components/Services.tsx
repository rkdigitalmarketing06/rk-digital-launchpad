import { motion } from "framer-motion";
import { Megaphone, Video, Palette, Camera, Search, BarChart3 } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Build a loyal audience and drive engagement across every major platform." },
  { icon: Video, title: "Video Production", desc: "Cinematic storytelling that captivates and converts your target audience." },
  { icon: Palette, title: "Creative Design", desc: "Stunning visuals and brand assets that make a lasting impression." },
  { icon: Camera, title: "Professional Shooting", desc: "High-quality photography for products, events, and brand campaigns." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, get found faster, and dominate organic search results." },
  { icon: BarChart3, title: "Performance Ads", desc: "Data-driven ad campaigns that maximize ROI across Google & Meta." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase mb-4">
          Our Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading">
          High-Impact Digital <span className="gradient-text">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative rounded-2xl bg-card p-8 border border-border/60 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-border group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300" />
            <div className="gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <s.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="text-lg font-heading font-semibold text-heading mb-2">{s.title}</h3>
            <p className="text-body-muted text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Learn More →
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
