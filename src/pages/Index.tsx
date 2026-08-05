import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Shop from "@/components/Shop";
import Videos from "@/components/Videos";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductDetailModal from "@/components/ProductDetailModal";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-demo-bg text-white">
      <SEO
        title="DROSU Engineering - Atelier Performanță Auto Râmnicu Vâlcea | Modificări Hardware Mașini Strada & Curse"
        description="Specialiști în modificări hardware pentru mașini de strada și de curse în Râmnicu Vâlcea, Județul Vâlcea. Cu 3 ani de experiență în motorsport, oferim servicii de calitate superioară. Consultanță gratuită."
        keywords="modificări performanță mașini strada, modificări performanță mașini curse, tuning auto hardware, atelier performanță râmnicu vâlcea, drosu engineering valcea"
        image="https://www.drosuengineering.com/src/assets/workshop-interior.jpg"
        url="https://www.drosuengineering.com"
        tags={[
          "performanță auto",
          "tuning",
          "tuning hardware",
          "mașini strada",
          "mașini curse",
          "modificări auto",
        ]}
        isLocalBusiness={true}
      />
      <AnnouncementBar />
      <Header />
      <Hero />
      <Capabilities />
      <Services />
      <Process />
      <Shop />
      <Videos />
      <CtaBand />
      <Contact />
      <Footer />
      <ProductDetailModal />
    </div>
  );
};

export default Index;
