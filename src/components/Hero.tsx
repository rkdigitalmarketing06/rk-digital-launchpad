import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

const heroStats = [
  { num: "200+", lbl: "Clients" },
  { num: "500+", lbl: "Projects" },
  { num: "5+", lbl: "Years" },
  { num: "50+", lbl: "Brands" },
];

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(262,72%,55%,0.08),transparent_60%)]" />
    <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6"
      >
        <span className="inline-block w-fit rounded-full bg-primary/10 px-5 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
          Data-Driven Growth
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-heading leading-[1.1]">
          Elevate Your Brand with Premium{" "}
          <span className="gradient-text">Digital Marketing.</span>
        </h1>
        <p className="text-body-muted text-lg max-w-lg leading-relaxed">
          Grow your brand, generate high-quality leads, and maximize your ROI with our proven, data-driven digital marketing strategies.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-lg shadow-accent/30"
          >
            Start Growing Now →
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            View Our Services
          </a>
        </div>
        <div className="flex items-center gap-6 mt-4 flex-wrap">
          {heroStats.map((s, i) => (
            <div key={s.lbl} className="flex items-center gap-6">
              {i > 0 && <div className="w-px h-8 bg-border/60" />}
              <div className="text-center">
                <div className="text-2xl font-heading font-extrabold gradient-text">{s.num}</div>
                <div className="text-xs text-body-muted">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={heroImg}
          alt="RK Digital Hero Image"
          width={800}
          height={800}
          className="w-full max-w-lg animate-float"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
