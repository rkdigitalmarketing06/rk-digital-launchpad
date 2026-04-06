import { motion } from "framer-motion";

const projects = [
  {
    tag: "E-COMMERCE BRAND",
    metric: "300%",
    title: "Traffic Growth",
    desc: "Deployed a comprehensive SEO and content strategy, tripling organic traffic within 6 months and significantly boosting conversion rates.",
    tagColor: "bg-accent/10 text-accent",
    metricColor: "gradient-text",
  },
  {
    tag: "LOCAL SERVICES",
    metric: "5x",
    title: "Lead Generation",
    desc: "Executed a targeted Google Ads campaign for a local service business, multiplying qualified leads by 5x while reducing cost-per-lead by 40%.",
    tagColor: "bg-primary/10 text-primary",
    metricColor: "gradient-text",
  },
  {
    tag: "SAAS STARTUP",
    metric: "#1",
    title: "Ranking Achieved",
    desc: "Dominated niche SaaS keywords through strategic SEO, earning the #1 Google spot for 12+ high-intent keywords within 4 months.",
    tagColor: "bg-border/40 text-heading",
    metricColor: "gradient-text",
  },
];

const Results = () => (
  <section id="results" className="py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase mb-4">
          Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading">
          Real Results for <span className="gradient-text">Real Businesses</span>
        </h2>
        <p className="text-body-muted mt-3">We let our numbers do the talking. Real growth for real businesses.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl border border-border/60 overflow-hidden bg-card hover:shadow-xl transition-all duration-300 p-8"
          >
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.tagColor} mb-4`}>
              {p.tag}
            </span>
            <p className="text-5xl font-heading font-extrabold gradient-text mb-2">{p.metric}</p>
            <h3 className="font-heading font-semibold text-heading text-lg mb-3">{p.title}</h3>
            <p className="text-body-muted text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
