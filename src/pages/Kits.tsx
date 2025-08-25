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
        title="Kituri Admisie - Detalii | DROSU Engineering"
        description="Vezi detalii pentru kiturile de admisie: imagini, beneficii și opțiuni."
        keywords="kit admisie, admisie sport, piese performanță"
        image="https://www.drosuengineering.com/src/assets/kituri/kit_admisie1.jpg"
        url="https://www.drosuengineering.com/kituri"
        tags={["kit admisie", "admisie sport", "piese performanță"]}
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
              Kituri Admisie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
              Detalii & Galerie
            </h1>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto">
              Kiturile de admisie îmbunătățesc fluxul de aer, accelerația și sunetul,
              oferind un răspuns mai prompt al motorului și potențial de putere sporit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
              <img src={intake1} alt="Kit admisie - imagine 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
              <img src={intake2} alt="Kit admisie - imagine 2" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-steel-gray space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-chrome-white text-center">Beneficii</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Flux de aer mai rece și stabil</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Creștere de putere</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Sunet plăcut, sportiv</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-performance-red rounded-full mt-2 mr-3"></span>Montaj profesionist în atelier</li>
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


