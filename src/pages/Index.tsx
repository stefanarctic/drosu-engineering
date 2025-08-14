import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="DROSU Engineering - Atelier Performanță Auto"
        description="Specialiști în remapare ECU, modificări performanță și optimizări auto. Peste 10 ani experiență, 500+ vehicule optimizate. Consultanță gratuită în București."
        keywords="remapare ecu, modificări performanță, tuning auto, optimizare motor, dyno test, suspensie sport, atelier auto bucurești, drosu engineering"
        image="https://drosuengineering.com/og-image.jpg"
        tags={["remapare ecu", "performanță auto", "tuning", "bucurești", "atelier auto"]}
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
