import { motion } from "framer-motion";
import { Rocket, Users, Clock, Tags } from "lucide-react";

const points = [
  { icon: Rocket, title: "Result-Driven Strategies", desc: "We focus relentlessly on ROI and deliver measurable growth for your business." },
  { icon: Users, title: "Creative & Experienced Team", desc: "Years of experience and a talented team dedicated to your success." },
  { icon: Clock, title: "On-Time Delivery", desc: "Consistent, punctual delivery on every project — no excuses, just results." },
  { icon: Tags, title: "Affordable Packages", desc: "Premium quality at competitive pricing, tailored to businesses of every size." },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Brands Served" },
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
          WHY CHOOSE US
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading mb-4">
          Why Choose <span className="gradient-text">RK Digital?</span>
        </h2>
        <p className="text-body-muted leading-relaxed mb-8">
          We aren't just an agency; we are your growth partners. With years of experience and a relentless focus on ROI, we've helped countless businesses scale to new heights through innovative digital strategies.
        </p>
        <div className="flex flex-col gap-6 mb-8">
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
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-lg shadow-accent/30"
        >
          Work With Us →
        </a>
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
