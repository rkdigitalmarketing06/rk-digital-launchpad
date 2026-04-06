import { motion } from "framer-motion";

const projects = [
  { tag: "E-commerce", title: "Fashion Brand Revamp", metric: "+300% Conversion Rate", color: "bg-primary/10 text-primary" },
  { tag: "Real Estate", title: "Luxury Property Leads", metric: "5x Lead Generation", color: "bg-accent/10 text-accent" },
  { tag: "SaaS", title: "Tech Startup Launch", metric: "#1 Ranking Achieved", color: "bg-primary/10 text-primary" },
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
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl border border-border/60 overflow-hidden bg-card hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-5xl font-heading font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                0{i + 1}
              </span>
            </div>
            <div className="p-6">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.color} mb-3`}>
                {p.tag}
              </span>
              <h3 className="font-heading font-semibold text-heading text-lg mb-2">{p.title}</h3>
              <p className="text-primary font-heading font-bold text-xl">{p.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
