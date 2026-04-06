import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Brands Served" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-heading font-extrabold text-accent">
      {count}
      {suffix}
    </span>
  );
};

const StatsBanner = () => (
  <section className="py-20 bg-dark-bg">
    <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      {stats.map((s) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Counter target={s.value} suffix={s.suffix} />
          <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBanner;
