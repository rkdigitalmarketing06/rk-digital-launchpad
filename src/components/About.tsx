import { motion } from "framer-motion";
import { TrendingUp, FileText, Users, ShieldCheck } from "lucide-react";

const points = [
  { icon: TrendingUp, title: "Data-Driven Approach", desc: "Every decision backed by analytics and real performance data." },
  { icon: FileText, title: "Transparent Reporting", desc: "Clear, honest reports so you always know where your money goes." },
  { icon: Users, title: "Expert Team", desc: "Seasoned marketers, designers, and videographers under one roof." },
  { icon: ShieldCheck, title: "Proven Results", desc: "Consistent track record of delivering measurable growth." },
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "250+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "50M+", label: "Ad Spend Managed" },
];

const About = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase mb-4">
          Why Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading mb-8">
          Why Brands Trust <span className="gradient-text">RK Digital</span>
        </h2>
        <div className="flex flex-col gap-6">
          {points.map((p) => (
            <div key={p.title} className="flex items-start gap-4">
              <div className="gradient-primary w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <p.icon className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-heading">{p.title}</h4>
                <p className="text-body-muted text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-5"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-background p-6 text-center border border-border/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <p className="text-3xl sm:text-4xl font-heading font-extrabold gradient-text">{s.value}</p>
            <p className="text-body-muted text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
