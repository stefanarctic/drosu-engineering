import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CeModificariPotFace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modificari = [
    {
      title: "Kit Admisie Sport",
      description: "Îmbunătățește fluxul de aer către motor, rezultând în răspuns mai rapid și putere sporită.",
      benefits: ["Răspuns mai rapid", "Putere crescută", "Sunet sport"]
    },
    {
      title: "Sistem Evacuare Sport",
      description: "Reduce rezistența la evacuarea gazelor, îmbunătățind performanța și oferind sunet distinctiv.",
      benefits: ["Performanță crescută", "Sunet sport", "Consum optimizat"]
    },
    {
      title: "Suspensie Sport",
      description: "Arcuri și amortizoare sport pentru handling superior și stabilitate la viteze înalte.",
      benefits: ["Handling îmbunătățit", "Stabilitate crescută", "Confort optimizat"]
    },
    {
      title: "Intercooler Performant",
      description: "Răcește aerul de admisie mai eficient, rezultând în putere și eficiență sporite.",
      benefits: ["Putere crescută", "Eficiență îmbunătățită", "Fiabilitate"]
    },
    {
      title: "Upgrade Turbo",
      description: "Turbocompresor mai mare sau optimizat pentru putere semnificativ crescută.",
      benefits: ["Putere mult crescută", "Răspuns îmbunătățit", "Performanță superioară"]
    }
  ];

  const faqItems = [
    {
      question: "Ce modificări pot face la mașina mea?",
      answer: "Poți face diverse modificări precum kit admisie sport, sisteme de evacuare, suspensie sport, intercooler performant, upgrade-uri turbo și multe altele. Fiecare modificare aduce beneficii specifice pentru performanță, handling sau sunet."
    },
    {
      question: "Modificările afectează consumul de combustibil?",
      answer: "Depinde de tipul modificărilor. Unele modificări pot îmbunătăți eficiența (precum kit admisie optimizat), în timp ce altele pot crește consumul (precum upgrade-uri turbo agresive). Consultanța noastră te ajută să alegi modificări echilibrate."
    },
    {
      question: "Cât costă modificările de performanță?",
      answer: "Prețurile variază de la 450 RON pentru un kit admisie simplu până la mii de RON pentru modificări complexe. Oferim consultanță gratuită pentru a determina ce modificări sunt potrivite pentru bugetul tău."
    },
    {
      question: "Modificările sunt legale în România?",
      answer: "Majoritatea modificărilor sunt legale dacă respectă normele RAR și trec ITP-ul. Te ajutăm să alegi modificări conforme cu legislația română și să obții aprobările necesare."
    }
  ];

  const publishedDate = "2024-01-15";
  const modifiedDate = "2024-01-15";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Ce Modificări Poți Face la Mașina Ta - Ghid Complet 2024 | DROSU Engineering"
        description="Ghid complet despre modificările de performanță pe care le poți face la mașina ta: kit admisie, evacuare sport, suspensie, intercooler și multe altele. Consultanță gratuită în Râmnicu Vâlcea."
        keywords="ce modificări pot face la mașina mea, modificări performanță auto, ghid modificări mașină, ce piese pot pune la mașina mea, modificări legale mașină românia"
        url="https://www.drosuengineering.com/blog/ce-modificari-pot-face"
        type="article"
        publishedTime={publishedDate}
        modifiedTime={modifiedDate}
        author="DROSU Engineering"
        section="Ghiduri Auto"
        tags={["modificări performanță", "ghid auto", "tuning", "piese performanță"]}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Blog", url: "/blog" },
          { name: "Ce Modificări Pot Face", url: "/blog/ce-modificari-pot-face" }
        ]}
        isLocalBusiness={false}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs 
            items={[
              { name: "Blog", url: "/blog" },
              { name: "Ce Modificări Pot Face", url: "/blog/ce-modificari-pot-face" }
            ]} 
          />

          {/* Article Header */}
          <article>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
                Ghid Auto
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
                Ce Modificări Poți Face la Mașina Ta - Ghid Complet 2024
              </h1>
              <p className="text-xl text-steel-gray mb-6">
                Descoperă cele mai populare modificări de performanță pe care le poți face la mașina ta și cum te pot ajuta să obții rezultatele dorite.
              </p>
              <div className="flex items-center gap-4 text-steel-gray text-sm">
                <span>Publicat: {new Date(publishedDate).toLocaleDateString('ro-RO')}</span>
                <span>•</span>
                <span>DROSU Engineering</span>
              </div>
            </div>

            {/* Featured Answer for Snippet */}
            <div className="bg-card border-l-4 border-performance-red p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-chrome-white">
                <strong>Răspuns scurt:</strong> Poți face diverse modificări de performanță la mașina ta, 
                inclusiv kit admisie sport, sisteme de evacuare, suspensie sport, intercooler performant și upgrade-uri turbo. 
                Fiecare modificare aduce beneficii specifice pentru performanță, handling sau sunet. 
                Recomandăm consultanță profesională pentru a alege modificările potrivite pentru vehiculul tău.
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-steel-gray text-lg mb-6">
                Dacă ești pasionat de performanță auto și vrei să îți îmbunătățești mașina, 
                există multe modificări pe care le poți face. În acest ghid complet, 
                explorăm cele mai populare modificări de performanță disponibile pentru mașinile de strada și de curse.
              </p>

              <h2 className="text-3xl font-bold text-chrome-white mt-12 mb-6">
                Top 5 Modificări de Performanță pentru Mașina Ta
              </h2>

              <div className="space-y-8 mb-12">
                {modificari.map((modificare, index) => (
                  <div key={index} className="bg-card border border-carbon-gray rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-chrome-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-chrome-white mb-3">
                          {modificare.title}
                        </h3>
                        <p className="text-steel-gray mb-4">
                          {modificare.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {modificare.benefits.map((benefit, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-performance-red/20 text-performance-red rounded-full text-sm"
                            >
                              <CheckCircle className="w-4 h-4" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-chrome-white mt-12 mb-6">
                Cum Să Alegi Modificările Potrivite
              </h2>
              <p className="text-steel-gray mb-4">
                Alegerea modificărilor potrivite depinde de mai mulți factori:
              </p>
              <ul className="list-none space-y-3 mb-8">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-performance-red mr-3 mt-1 flex-shrink-0" />
                  <span className="text-steel-gray"><strong>Obiectivul tău:</strong> Vrei mai multă putere, handling mai bun, sau sunet mai sport?</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="w-5 h-5 text-performance-red mr-3 mt-1 flex-shrink-0" />
                  <span className="text-steel-gray"><strong>Bugetul disponibil:</strong> Modificările variază de la câteva sute la mii de RON.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-performance-red mr-3 mt-1 flex-shrink-0" />
                  <span className="text-steel-gray"><strong>Legalitatea:</strong> Asigură-te că modificările respectă normele RAR și trec ITP-ul.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-chrome-white mt-12 mb-6">
                De Ce Să Alegi DROSU Engineering
              </h2>
              <p className="text-steel-gray mb-6">
                La DROSU Engineering din Râmnicu Vâlcea, oferim consultanță gratuită pentru a te ajuta 
                să alegi modificările potrivite pentru mașina ta. Cu experiență în motorsport și 
                atenție la detalii, transformăm fiecare vehicul într-o mașină de performanță.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-card border border-carbon-gray rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-chrome-white mb-6">
                Întrebări Frecvente
              </h2>
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-chrome-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-steel-gray">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-performance-red/20 to-performance-orange/20 border border-performance-red rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-chrome-white mb-4">
                Gata să îți Modifici Mașina?
              </h3>
              <p className="text-steel-gray mb-6">
                Contactează-ne pentru o consultanță gratuită și să afli ce modificări sunt potrivite pentru vehiculul tău.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="performance" 
                  size="xl"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicită Consultanță Gratuită
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/#services">
                    Vezi Serviciile Noastre
                  </Link>
                </Button>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-carbon-gray">
            <Button variant="outline" asChild>
              <Link to="/#services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Înapoi la Servicii
              </Link>
            </Button>
            <Button variant="outline" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contactează-ne
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CeModificariPotFace;
