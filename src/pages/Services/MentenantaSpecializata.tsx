import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Settings2, Zap, CheckCircle, ArrowLeft, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MentenantaSpecializata = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Diagnostic avansat pentru vehicule modificate",
    "Verificări periodice complete",
    "Înlocuire piese de performanță",
    "Reglaje fine pentru performanță optimă",
    "Consultanță pentru mentenanță preventivă",
    "Servicii de urgență pentru vehicule de curse"
  ];

  const benefits = [
    "Fiabilitate crescută a vehiculului",
    "Performanță optimă menținută",
    "Prevenire defecțiuni costisitoare",
    "Expertiză specializată pentru mașini modificate",
    "Piese originale și aftermarket de calitate",
    "Garanție pentru serviciile efectuate"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Diagnostic Complet",
      description: "Efectuăm un diagnostic detaliat pentru a identifica orice probleme sau zone de îmbunătățire."
    },
    {
      step: 2,
      title: "Planificare Servicii",
      description: "Elaborăm un plan de mentenanță personalizat bazat pe utilizarea și modificările vehiculului tău."
    },
    {
      step: 3,
      title: "Executare Servicii",
      description: "Echipa noastră execută serviciile necesare cu piese de calitate și echipamente profesionale."
    },
    {
      step: 4,
      title: "Verificare Finală",
      description: "Testăm vehiculul pentru a ne asigura că totul funcționează perfect și oferim recomandări pentru viitor."
    }
  ];

  const faqItems = [
    {
      question: "Ce servicii de mentenanță oferiți?",
      answer: "Oferim diagnostic avansat, verificări periodice, înlocuire piese, reglaje fine și servicii de urgență pentru vehicule modificate. Fiecare serviciu este adaptat nevoilor specifice ale mașinii tale."
    },
    {
      question: "Cât de des ar trebui să verific mașina modificată?",
      answer: "Pentru vehicule modificate, recomandăm verificări la fiecare 5.000-10.000 km sau la 6 luni, în funcție de utilizare. Pentru mașini de curse, verificările sunt mai frecvente."
    },
    {
      question: "Folosiți piese originale sau aftermarket?",
      answer: "Folosim atât piese originale cât și piese aftermarket de înaltă calitate, în funcție de nevoile vehiculului și bugetul tău. Recomandăm întotdeauna cea mai bună opțiune pentru fiecare situație."
    },
    {
      question: "Oferiți garanție pentru serviciile de mentenanță?",
      answer: "Da, oferim garanție pentru toate serviciile efectuate și pentru piesele montate. Durata garanției depinde de tipul de serviciu și piesă."
    },
    {
      question: "Pot programa o verificare preventivă?",
      answer: "Absolut! Recomandăm verificări periodice pentru a preveni probleme costisitoare și pentru a menține performanța optimă a vehiculului tău."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Mentenanță Specializată Auto - Servicii Profesionale | DROSU Engineering Valcea"
        description="Servicii complete de mentenanță specializată pentru vehicule modificate în Râmnicu Vâlcea. Diagnostic avansat, verificări periodice, înlocuire piese. Prețuri de la 200 RON."
        keywords="mentenanță auto, diagnostic auto, verificări auto, servicii auto valcea, mentenanță mașini modificate, atelier auto valcea, service auto valcea"
        url="https://www.drosuengineering.com/servicii/mentenanta-specializata"
        serviceSchema={{
          name: "Mentenanță Specializată",
          description: "Servicii complete de mentenanță pentru vehiculele modificate cu diagnostic avansat și piese de calitate",
          serviceType: "Auto Maintenance Service",
          areaServed: "Râmnicu Vâlcea",
          provider: {
            name: "DROSU Engineering",
            telephone: "+40-726-960-376"
          }
        }}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Servicii", url: "/#services" },
          { name: "Mentenanță Specializată", url: "/servicii/mentenanta-specializata" }
        ]}
        isLocalBusiness={true}
      />
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
          <Breadcrumbs items={[
            { name: "Servicii", url: "/#services" },
            { name: "Mentenanță Specializată", url: "/servicii/mentenanta-specializata" }
          ]} />

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
                <Settings2 className="w-10 h-10 text-performance-red" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
                Mentenanță Specializată - 
                <span className="text-performance-red"> Fiabilitate Maximă</span>
              </h1>
              <p className="text-xl text-steel-gray mb-8 max-w-3xl mx-auto">
                Servicii complete de mentenanță pentru vehiculele modificate cu diagnostic avansat, 
                verificări periodice și piese de calitate superioară.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="performance" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicită Ofertă
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-performance-red text-performance-red hover:bg-performance-red hover:text-chrome-white"
                  asChild
                >
                  <Link to="/#services">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Înapoi la Servicii
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-chrome-white mb-8 text-center">
                Ce Include Serviciul
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card border border-carbon-gray rounded-lg">
                    <CheckCircle className="w-6 h-6 text-performance-red flex-shrink-0 mt-1" />
                    <p className="text-steel-gray">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-chrome-white mb-8 text-center">
                Beneficii
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-br from-card to-carbon-gray border border-performance-red/20 rounded-lg">
                    <Zap className="w-6 h-6 text-performance-orange flex-shrink-0 mt-1" />
                    <p className="text-steel-gray font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-chrome-white mb-8 text-center">
                Procesul de Lucru
              </h2>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-6 p-6 bg-card border border-carbon-gray rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-chrome-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-chrome-white mb-2">{step.title}</h3>
                      <p className="text-steel-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-chrome-white mb-8 text-center">
                Întrebări Frecvente
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="p-6 bg-card border border-carbon-gray rounded-lg">
                    <h3 className="text-lg font-bold text-chrome-white mb-2">{faq.question}</h3>
                    <p className="text-steel-gray">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center p-8 bg-gradient-to-r from-performance-red/20 to-performance-orange/20 border border-performance-red rounded-lg">
              <h2 className="text-2xl font-bold text-chrome-white mb-4">
                Gata să Menții Mașina Ta în Stare Perfectă?
              </h2>
              <p className="text-steel-gray mb-6">
                Contactează-ne pentru o programare și ofertă personalizată pentru mentenanța vehiculului tău.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="performance" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicită Ofertă
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-chrome-white text-chrome-white hover:bg-chrome-white hover:text-background"
                  asChild
                >
                  <Link to="/#services">Vezi Toate Serviciile</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MentenantaSpecializata;
