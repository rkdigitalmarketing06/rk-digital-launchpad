const Footer = () => (
  <footer className="bg-dark-bg pt-16 pb-8">
    <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4">RK Digital</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Premium digital marketing agency delivering data-driven growth strategies for ambitious brands.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Quick Links</h4>
        <ul className="flex flex-col gap-2">
          {["Home", "Services", "About", "Results", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Services</h4>
        <ul className="flex flex-col gap-2">
          {["Social Media", "Video Production", "SEO", "Performance Ads", "Creative Design"].map((s) => (
            <li key={s}>
              <span className="text-sm text-muted-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((s) => (
            <span
              key={s}
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
            >
              {s[0]}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 lg:px-8 border-t border-muted-foreground/20 pt-6">
      <p className="text-center text-xs text-muted-foreground">
        © 2026 RK Digital Marketing. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
