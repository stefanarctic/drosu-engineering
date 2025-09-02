import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import intake1 from "@/assets/kituri/kit_admisie1.jpg";
import intake2 from "@/assets/kituri/kit_admisie2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Kits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Piese Performanță Auto - DROSU Engineering"
        description="Descoperă gama completă de piese de performanță pentru mașini: kituri admisie, evacuare, suspensie și multe altele. Calitate superioară și instalare profesionistă."
        keywords="piese performanță auto, kit admisie, evacuare sport, suspensie sport, piese tuning, drosu engineering"
        image="https://www.drosuengineering.com/src/assets/kituri/kit_admisie1.jpg"
        url="https://www.drosuengineering.com/piese"
        tags={["piese performanță", "kit admisie", "evacuare sport", "suspensie sport", "piese tuning"]}
        isLocalBusiness={true}
      />
      <Header />

      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-steel-gray hover:text-chrome-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la prima pagină
            </Link>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Piese Performanță
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
              Gama Completă de Piese
            </h1>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto">
              Descoperă gama noastră de piese de performanță pentru mașini de strada și de curse.
              De la kituri de admisie la sisteme de evacuare și suspensie sport.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Kit Admisie */}
            <div className="bg-card border border-carbon-gray rounded-lg overflow-hidden hover:border-performance-red transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={intake1} alt="Kit Admisie Sport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-chrome-white mb-2">Kit Admisie Sport</h3>
                <p className="text-steel-gray mb-4">Îmbunătățește fluxul de aer și răspunsul motorului</p>
                <div className="flex items-center justify-between">
                  <span className="text-performance-orange font-bold">de la 450 RON</span>
                  <Link to="/piese/kit-admisie" className="text-performance-red hover:text-chrome-white transition-colors">
                    Vezi detalii →
                  </Link>
                </div>
              </div>
            </div>

            {/* Coming Soon - Kit Evacuare */}
            <div className="bg-card border border-carbon-gray rounded-lg overflow-hidden opacity-60">
              <div className="aspect-[4/3] bg-gradient-to-br from-carbon-gray to-carbon-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-performance-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-performance-red text-2xl">🔧</span>
                  </div>
                  <h4 className="text-chrome-white font-semibold">Kit Evacuare</h4>
                  <p className="text-steel-gray text-sm">În curând</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-chrome-white mb-2">Kit Evacuare Sport</h3>
                <p className="text-steel-gray mb-4">Sistem complet de evacuare pentru performanță maximă</p>
                <div className="flex items-center justify-between">
                  <span className="text-steel-gray">În dezvoltare</span>
                  <span className="text-steel-gray">Curând</span>
                </div>
              </div>
            </div>

            {/* Coming Soon - Suspensie Sport */}
            <div className="bg-card border border-carbon-gray rounded-lg overflow-hidden opacity-60">
              <div className="aspect-[4/3] bg-gradient-to-br from-carbon-gray to-carbon-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-performance-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-performance-red text-2xl">⚙️</span>
                  </div>
                  <h4 className="text-chrome-white font-semibold">Suspensie Sport</h4>
                  <p className="text-steel-gray text-sm">În curând</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-chrome-white mb-2">Suspensie Sport</h3>
                <p className="text-steel-gray mb-4">Arcuri și amortizoare pentru handling superior</p>
                <div className="flex items-center justify-between">
                  <span className="text-steel-gray">În dezvoltare</span>
                  <span className="text-steel-gray">Curând</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-steel-gray space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-chrome-white text-center">De ce să alegi piesele noastre?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Calitate superioară și durabilitate</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Instalare profesionistă în atelier</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Garanție completă pentru toate piesele</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Testare și verificare post-instalare</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contact">
              <Button variant="performance" size="xl">
                Cere ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" size="xl" className="border-chrome-white text-chrome-white hover:bg-chrome-white hover:text-carbon-black">
                Înapoi
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kits;


