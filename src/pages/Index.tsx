import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import Services from "@/components/Services";
import PerformanceParts from "@/components/PerformanceParts";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when page loads with hash
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      // Wait for page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="DROSU Engineering - Atelier Performanță Auto Râmnicu Vâlcea | Modificări Hardware Mașini Strada & Curse"
        description="Specialiști în modificări hardware pentru mașini de strada și de curse în Râmnicu Vâlcea, Județul Vâlcea. Cu 3 ani de experiență în motorsport, oferim servicii de calitate superioară. Consultanță gratuită."
        keywords="modificări performanță mașini strada, modificări performanță mașini curse, tuning auto hardware, atelier performanță râmnicu vâlcea, drosu engineering valcea"
        image="https://www.drosuengineering.com/src/assets/workshop-interior.jpg"
        url="https://www.drosuengineering.com"
        tags={["performanță auto", "tuning", "tuning hardware", "mașini strada", "mașini curse", "modificări auto"]}
        isLocalBusiness={true}
      />
      <Header />
      <Hero />
      <ComingSoon />
      {/* <Services /> */}
      {/* <PerformanceParts /> */}
      {/* <About /> */}
      {/* <Blog /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
