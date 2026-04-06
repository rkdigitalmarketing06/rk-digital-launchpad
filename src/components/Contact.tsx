import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase mb-4">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading">
          Ready to <span className="gradient-text">Scale?</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-background p-8 border border-border/60 shadow-lg flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="font-heading font-semibold text-heading text-xl mb-2">Get a Free Proposal</h3>
          {[
            { name: "name", placeholder: "Full Name", type: "text" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "phone", placeholder: "Phone Number", type: "tel" },
          ].map((f) => (
            <input
              key={f.name}
              type={f.type}
              placeholder={f.placeholder}
              className="w-full rounded-xl border border-border bg-card px-5 py-3 text-sm text-heading placeholder:text-body-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          ))}
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full rounded-xl border border-border bg-card px-5 py-3 text-sm text-heading placeholder:text-body-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-lg shadow-accent/30 mt-2"
          >
            Send Your Proposal →
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 justify-center"
        >
          {[
            { icon: MapPin, title: "Our Office", text: "123 Digital Avenue, Mumbai, India" },
            { icon: Mail, title: "Email Us", text: "hello@rkdigital.com" },
            { icon: Phone, title: "Call Us", text: "+91 98765 43210" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4">
              <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <c.icon className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-heading">{c.title}</h4>
                <p className="text-body-muted text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
