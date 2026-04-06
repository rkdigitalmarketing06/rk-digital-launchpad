import SocialLinks from "@/components/SocialLinks";

const Footer = () => (
  <footer className="bg-dark-bg pt-16 pb-8">

    <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <img
            src="/logo.jpeg"
            alt="RK Digital Marketing Logo"
            className="h-10 w-10 rounded-md object-cover bg-white"
          />
          <h3 className="text-xl font-heading font-bold text-primary-foreground">RK Digital Marketing</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We help businesses grow their brand, generate quality leads, and maximize ROI through premium digital marketing strategies.
        </p>
        <SocialLinks className="mt-4" />
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Quick Links</h4>
        <ul className="flex flex-col gap-2">
          {[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Case Studies", href: "#results" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Our Services</h4>
        <ul className="flex flex-col gap-2">
          {[
            "Social Media Management",
            "Photo & Video Editing",
            "Creative Designs",
            "Professional Shooting",
            "Product Labelling",
            "Digital Video Services",
          ].map((s) => (
            <li key={s}>
              <span className="text-sm text-muted-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider mb-4">Contact</h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>📞</span><a href="tel:+919952060354" className="hover:text-accent transition-colors">+91 9952060354</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>✉️</span><a href="mailto:rkdigitalmarketing06@gmail.com" className="hover:text-accent transition-colors">rkdigitalmarketing06@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>📍</span><span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 lg:px-8 border-t border-muted-foreground/20 pt-6">
      <p className="text-center text-xs text-muted-foreground">
        © 2025 RK Digital Marketing. All Rights Reserved. Crafted with ♥ for Growth.
      </p>
    </div>
  </footer>
);

export default Footer;
