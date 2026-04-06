import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

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
          Premium Digital Agency
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-heading leading-[1.1]">
          Accelerate Your Brand's{" "}
          <span className="gradient-text">Digital Growth</span>
        </h1>
        <p className="text-body-muted text-lg max-w-lg leading-relaxed">
          Data-driven strategies, creative design, and professional video production to scale your business.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-lg shadow-accent/30"
          >
            Start Your Project
          </a>
          <a
            href="#results"
            className="rounded-full border-2 border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            View Our Work
          </a>
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
          alt="Digital marketing analytics illustration"
          width={800}
          height={800}
          className="w-full max-w-lg animate-float"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
