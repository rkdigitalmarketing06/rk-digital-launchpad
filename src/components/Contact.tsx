import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, XCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
import SocialLinks from "@/components/SocialLinks";

// ── EmailJS credentials ────────────────────────────────────────────
const EJS_PUBLIC_KEY  = "Tb1U2AfPy1ujdryxJ";
const EJS_SERVICE_ID  = "service_bm8n525";
const EJS_TEMPLATE_ID = "template_069woil";
// ──────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: Phone,  title: "Call Us",    text: "+91 9952060354",                  href: "tel:+919952060354" },
  { icon: Mail,   title: "Email Us",   text: "rkdigitalmarketing06@gmail.com",  href: "mailto:rkdigitalmarketing06@gmail.com" },
  { icon: MapPin, title: "Location",   text: "Tamil Nadu, India",               href: undefined },
];

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus]   = useState<Status>("idle");
  const [errors, setErrors]   = useState<Record<string, string>>({});

  // ── Field-level validation ────────────────────────────────────────
  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name    = (data.get("from_name")  as string)?.trim();
    const email   = (data.get("from_email") as string)?.trim();
    const phone   = (data.get("phone")      as string)?.trim();
    const message = (data.get("message")    as string)?.trim();

    if (!name  || name.length < 2)                                   errs.name    = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))        errs.email   = "Please enter a valid email address.";
    if (!phone || !/^[+\d\s\-]{7,15}$/.test(phone))                 errs.phone   = "Please enter a valid phone number.";
    if (!message || message.length < 10)                             errs.message = "Message must be at least 10 characters.";

    return errs;
  };

  // ── Submit handler ────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_ID,
        formRef.current,
        EJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fieldClass = (field: string) =>
    `w-full rounded-xl border px-5 py-3 text-sm text-heading placeholder:text-body-muted bg-card focus:outline-none focus:ring-2 transition ${
      errors[field]
        ? "border-red-400 focus:ring-red-400/40"
        : "border-border focus:ring-primary/40"
    }`;

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
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
          <p className="text-body-muted mt-3 max-w-lg mx-auto">
            Get in touch with our team today. We'll craft a custom digital strategy tailored specifically to your business goals and budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* ── Contact Form ── */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-background p-8 border border-border/60 shadow-lg flex flex-col gap-5"
          >
            <h3 className="font-heading font-semibold text-heading text-xl mb-2">
              Get a Free Proposal
            </h3>

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name *"
                  autoComplete="name"
                  className={fieldClass("name")}
                  onChange={() => errors.name && setErrors(p => ({ ...p, name: "" }))}
                />
                {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email Address *"
                  autoComplete="email"
                  className={fieldClass("email")}
                  onChange={() => errors.email && setErrors(p => ({ ...p, email: "" }))}
                />
                {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                autoComplete="tel"
                className={fieldClass("phone")}
                onChange={() => errors.phone && setErrors(p => ({ ...p, phone: "" }))}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your business and goals… *"
                className={`${fieldClass("message")} resize-none`}
                onChange={() => errors.message && setErrors(p => ({ ...p, message: "" }))}
              />
              {errors.message && <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-accent/30 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
              {status === "sending" ? (
                <><Loader size={16} className="animate-spin" /> Sending…</>
              ) : status === "success" ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : status === "error" ? (
                <><XCircle size={16} /> Failed – Try Again</>
              ) : (
                <><Send size={16} /> Get Free Proposal</>
              )}
            </button>

            {/* Status banners */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-emerald-500 font-medium"
              >
                ✅ We received your message and will reply within 24 hours!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400 font-medium"
              >
                ❌ Send failed. Please try again or call us directly.
              </motion.p>
            )}

            <p className="text-xs text-body-muted text-center">
              🛡️ We'll get back to you within 24 hours.
            </p>
          </motion.form>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-center"
          >
            {contactInfo.map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-heading">{c.title}</h4>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-body-muted text-sm hover:text-primary transition-colors"
                    >
                      {c.text}
                    </a>
                  ) : (
                    <p className="text-body-muted text-sm">{c.text}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social icons */}
            <SocialLinks className="mt-2" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
