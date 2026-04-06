import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import StatsBanner from "@/components/StatsBanner";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <WhatsAppFloat />
    <Navbar />
    <Hero />
    <Services />
    <About />
    <StatsBanner />
    <Results />
    <Contact />
    <Footer />
  </>
);

export default Index;
