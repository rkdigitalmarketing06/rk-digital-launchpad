import { motion } from "framer-motion";
import { Megaphone, Film, Palette, Camera, Tag, Video, Sparkles } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    tags: ["Meta Ads", "Daily Posts", "Engagement"],
    desc: "We grow your social presence with targeted ads, consistent content, and community engagement strategies that convert followers into customers.",
  },
  {
    icon: Film,
    title: "Photo & Video Editing",
    tags: ["Reels", "Ad Videos", "Retouching"],
    desc: "Dynamic reels, high-converting video ads, and flawless professional-grade images — crafted to capture attention and drive results for your brand.",
  },
  {
    icon: Palette,
    title: "Creative Designs",
    tags: ["Social Media", "Ads", "Branding"],
    desc: "Visual content, ad graphics, logos, and cohesive brand identities — designed to speak your unique voice and boost engagement across all platforms.",
  },
  {
    icon: Camera,
    title: "Professional Shooting",
    tags: ["Product", "Business", "Promo Shoots"],
    desc: "Studio-quality product images, corporate portraits, and creative promotional shoots that tell your brand story and drive sales.",
  },
  {
    icon: Tag,
    title: "Product Labelling Design",
    tags: ["Packaging", "Branding", "Label Design"],
    desc: "Eye-catching packaging and regulatory-compliant label designs for bottles, boxes, and pouches — built to differentiate on shelves and online.",
  },
  {
    icon: Video,
    title: "RK Digital Video Services",
    tags: ["30 Shoots", "Pro Editing", "Scriptwriting"],
    desc: "30 custom video shoots with professional editing and scriptwriting — tailored entirely to your business goals and target audience.",
  },
  {
    icon: Sparkles,
    title: "Ecommerce Product Shoot & AI Image Creation",
    tags: ["Product Shoots", "AI Backgrounds", "Creative Ads"],
    desc: "Professional ecommerce product photography combined with cutting-edge AI-generated visuals to make your products stand out and convert better.",
  },
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
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-heading">
          Our Premium <span className="gradient-text">Services</span>
        </h2>
        <p className="text-body-muted mt-3">Everything you need to dominate your market digitally.</p>
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
            <div className="flex flex-wrap gap-1.5 mb-3">
              {s.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-primary/30 px-3 py-0.5 text-xs font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-body-muted text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="#contact" className="inline-flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 before:absolute before:inset-0">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
