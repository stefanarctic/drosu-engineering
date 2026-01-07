import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ModificariHardware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Admisie sport cu filtre de înaltă performanță",
    "Intercooler performant pentru răcire optimă",
    "Sisteme de evacuare sport pentru sunet și performanță",
    "Turbocompresoare și upgrade-uri turbo",
    "Sisteme de răcire îmbunătățite",
    "Upgrade-uri pentru sistemul de alimentare"
  ];

  const benefits = [
    "Creștere semnificativă a puterii motorului",
    "Răspuns mai rapid la accelerație",
    "Sunet sport distinctiv",
    "Eficiență îmbunătățită a combustibilului",
    "Fiabilitate crescută a sistemului",
    "Compatibilitate cu modificări ulterioare"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultanță și Analiză",
      description: "Evaluăm vehiculul tău și discutăm obiectivele de performanță pentru a recomanda modificările optime."
    },
    {
      step: 2,
      title: "Planificare și Aprovizionare",
      description: "Selectăm piese de calitate superioară și planificăm procesul de instalare."
    },
    {
      step: 3,
      title: "Instalare Profesionistă",
      description: "Echipa noastră certificată instalează piesele cu precizie și atenție la detalii."
    },
    {
      step: 4,
      title: "Testare și Verificare",
      description: "Testăm vehiculul pentru a ne asigura că toate modificările funcționează corect."
    }
  ];

  const faqItems = [
    {
      question: "Ce modificări hardware pot face la mașina mea?",
      answer: "Poți face diverse modificări hardware precum kit admisie sport, sisteme de evacuare, intercooler performant, upgrade-uri turbo și multe altele. Recomandăm o consultanță pentru a determina ce modificări sunt potrivite pentru vehiculul tău."
    },
    {
      question: "Modificările hardware afectează garanția mașinii?",
      answer: "Da, modificările hardware pot afecta garanția de fabrică. Totuși, oferim garanție pentru piesele și serviciile noastre. Recomandăm să discuți cu dealer-ul înainte de modificări."
    },
    {
      question: "Cât durează instalarea modificărilor hardware?",
      answer: "Durata depinde de complexitatea modificărilor. O modificare simplă precum kit admisie poate dura 2-4 ore, în timp ce modificări complexe pot dura câteva zile."
    },
    {
      question: "Modificările hardware sunt legale în România?",
      answer: "Majoritatea modificărilor hardware sunt legale, dar trebuie să respecte normele RAR și să treacă ITP-ul. Te ajutăm să alegi modificări conforme cu legislația română."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Modificări Hardware Auto - Servicii Performanță | DROSU Engineering Valcea"
        description="Servicii profesionale de modificări hardware pentru mașini de strada și curse în Râmnicu Vâlcea. Kit admisie, evacuare sport, intercooler și multe altele. Prețuri de la 1500 RON."
        keywords="modificări hardware, modificări performanță, kit admisie, evacuare sport, intercooler performanță, tuning auto valcea, modificări mașină valcea"
        url="https://www.drosuengineering.com/servicii/modificari-hardware"
        serviceSchema={{
          name: "Modificări Hardware",
          description: "Instalarea și configurarea pieselor de performanță pentru upgrade-uri complete ale vehiculelor",
          serviceType: "Auto Performance Modification",
          areaServed: "Râmnicu Vâlcea",
          provider: {
            name: "DROSU Engineering",
            telephone: "+40-726-960-376"
          }
        }}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Servicii", url: "/#services" },
          { name: "Modificări Hardware", url: "/servicii/modificari-hardware" }
        ]}
        isLocalBusiness={true}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs 
            items={[
              { name: "Servicii", url: "/#services" },
              { name: "Modificări Hardware", url: "/servicii/modificari-hardware" }
            ]} 
          />

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Servicii Performanță
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
              Modificări Hardware Auto
              <span className="text-performance-red"> Râmnicu Vâlcea</span>
            </h1>
            <p className="text-xl text-steel-gray max-w-3xl mx-auto">
              Servicii profesionale de instalare și configurare piese performanță pentru mașini de strada și de curse. 
              Transformăm vehiculul tău într-o mașină de performanță prin modificări hardware de calitate superioară.
            </p>
          </div>

          {/* Features */}
          <div className="bg-card border border-carbon-gray rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-chrome-white mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-performance-red" />
              Ce Include Serviciul
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-performance-red mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-steel-gray">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-carbon-gray rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-chrome-white mb-6 flex items-center gap-3">
              <Wrench className="w-6 h-6 text-performance-red" />
              Beneficii Modificări Hardware
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-performance-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-steel-gray">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-chrome-white mb-8 text-center">
              Procesul Nostru de Lucru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-card border border-carbon-gray rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-chrome-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-chrome-white mb-2">{step.title}</h3>
                  <p className="text-steel-gray text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
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

          {/* Pricing */}
          <div className="bg-card border border-carbon-gray rounded-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-chrome-white mb-4">
              Prețuri Modificări Hardware
            </h2>
            <p className="text-steel-gray mb-6">
              Prețurile variază în funcție de tipul de modificări și piesele alese. 
              Oferim consultanță gratuită pentru a determina ce modificări sunt potrivite pentru vehiculul tău.
            </p>
            <div className="text-3xl font-bold text-performance-orange mb-6">
              de la 1500 RON
            </div>
            <Button 
              variant="performance" 
              size="xl"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicită Ofertă Personalizată
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild>
              <Link to="/#services">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Vezi Toate Serviciile
              </Link>
            </Button>
            <Button variant="performance" size="xl" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contactează-ne
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModificariHardware;
