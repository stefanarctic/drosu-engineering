import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Zap, Gauge, Wrench } from "lucide-react";
import intake1 from "@/assets/kituri/kit_admisie1.jpg";
import intake2 from "@/assets/kituri/kit_admisie2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const KitDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    // Navigate to home page with contact hash
    window.location.href = '/#contact';
    
    // After navigation, scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const features = [
    "Filtru sport de înaltă performanță",
    "Conducte de admisie din aluminiu",
    "Conuri silicon pentru etanșare",
    "Instalare profesionistă în atelier",
    "Testare și verificare post-instalare"
  ];

  const benefits = [
    "Răspuns mai rapid al motorului",
    "Putere sporită la toate turațiile",
    "Sunet sport distinctiv",
    "Consum optimizat de combustibil",
    "Durabilitate îmbunătățită"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kit Admisie Sport - Detalii Complete | DROSU Engineering"
        description="Kit complet de admisie sport cu filtre de înaltă performanță, conducte aluminiu și instalare profesionistă. Îmbunătățește răspunsul motorului și puterea."
        keywords="kit admisie sport, filtre performanță, conducte admisie aluminiu, tuning motor"
        image="https://www.drosuengineering.com/src/assets/kituri/kit_admisie1.jpg"
        url="https://www.drosuengineering.com/piese/kit-admisie"
        tags={["kit admisie", "admisie sport", "piese performanță", "tuning motor"]}
        isLocalBusiness={true}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-steel-gray hover:text-chrome-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la prima pagină
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Kituri Admisie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
              Kit Admisie Sport
            </h1>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto">
              Soluția completă pentru îmbunătățirea performanței motorului prin optimizarea fluxului de aer
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                <img src={intake1} alt="Kit admisie - imagine principală" className="w-full h-full object-cover" />
              </div>
              <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                <img src={intake2} alt="Kit admisie - imagine secundară" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Price and CTA */}
              <div className="bg-card border border-carbon-gray rounded-lg p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-performance-orange">de la 450 RON</span>
                  {/* <p className="text-steel-gray mt-2">Prețul include instalarea</p> */}
                </div>
                <Button variant="performance" size="xl" className="w-full" asChild>
                  <Link to="/#contact">
                    Programează Instalarea
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-chrome-white flex items-center gap-3">
                  <Zap className="w-6 h-6 text-performance-red" />
                  Caracteristici Tehnice
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-steel-gray">
                      <div className="w-2 h-2 bg-performance-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-chrome-white flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-performance-red" />
                  Beneficii
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-steel-gray">
                      <div className="w-2 h-2 bg-performance-orange rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-card border border-carbon-gray rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-chrome-white mb-6 flex items-center gap-3">
              <Wrench className="w-6 h-6 text-performance-red" />
              Specificații Tehnice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Materiale</h4>
                  <p className="text-steel-gray">Aluminiu anodizat, silicon industrial, filtru de înaltă performanță</p>
                </div>
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Compatibilitate</h4>
                  <p className="text-steel-gray">Majoritatea modelelor europene și japoneze</p>
                </div>
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Garantie</h4>
                  <p className="text-steel-gray">24 luni pentru materiale, 12 luni pentru instalare</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Timp Instalare</h4>
                  <p className="text-steel-gray">2-4 ore în funcție de model</p>
                </div>
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Testare</h4>
                  <p className="text-steel-gray">Verificare completă post-instalare</p>
                </div>
                <div>
                  <h4 className="font-semibold text-chrome-white mb-2">Documentație</h4>
                  <p className="text-steel-gray">Certificat de instalare și manual utilizare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-chrome-white mb-4">
              Gata să îți îmbunătățești performanța?
            </h3>
            <p className="text-steel-gray mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru o consultație gratuită și să afli dacă acest kit este compatibil cu mașina ta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="performance" size="xl" onClick={scrollToContact}>
                Programează Consultația
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/piese">
                  Vezi Toate Piesele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KitDetails;
