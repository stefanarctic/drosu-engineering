import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Gauge, Zap, CheckCircle, ArrowLeft, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const OptimizareAerodinamica = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Splitter frontal pentru downforce crescut",
    "Spoiler posterior pentru stabilitate",
    "Diffuser pentru optimizare flux aer",
    "Kit-uri complete aerodinamice",
    "Testare în tunel de vânt (simulare)",
    "Instalare și reglare profesională"
  ];

  const benefits = [
    "Stabilitate crescută la viteze înalte",
    "Reducere consum combustibil",
    "Downforce optimizat pentru performanță",
    "Aspect sport distinctiv",
    "Reducere zgomot aerodinamic",
    "Performanță superioară pe circuit"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Analiză Aerodinamică",
      description: "Evaluăm vehiculul tău și determinăm zonele de optimizare pentru performanță maximă."
    },
    {
      step: 2,
      title: "Design și Selecție",
      description: "Alegem componente aerodinamice de la producători de top, adaptate pentru vehiculul tău."
    },
    {
      step: 3,
      title: "Instalare Precisă",
      description: "Echipa noastră instalează componentele cu precizie pentru funcționalitate și estetică optimă."
    },
    {
      step: 4,
      title: "Testare și Optimizare",
      description: "Testăm vehiculul și ajustăm componentele pentru performanță aerodinamică maximă."
    }
  ];

  const faqItems = [
    {
      question: "Ce componente aerodinamice pot instala?",
      answer: "Poți instala splitter frontal, spoiler posterior, diffuser, side skirts și multe altele. Fiecare componentă este aleasă pentru a optimiza performanța vehiculului tău."
    },
    {
      question: "Componentele aerodinamice afectează consumul?",
      answer: "Da, componentele aerodinamice optimizate pot reduce consumul de combustibil prin reducerea rezistenței la înaintare și optimizarea fluxului de aer."
    },
    {
      question: "Cât durează instalarea componentelor aerodinamice?",
      answer: "Durata depinde de complexitatea instalării. O componentă simplă precum spoiler poate dura 2-4 ore, în timp ce un kit complet poate dura 1-2 zile."
    },
    {
      question: "Componentele aerodinamice sunt legale în România?",
      answer: "Majoritatea componentelor aerodinamice sunt legale dacă respectă normele RAR și nu depășesc dimensiunile permise. Te ajutăm să alegi componente conforme cu legislația."
    },
    {
      question: "Pot folosi mașina zilnic cu componente aerodinamice?",
      answer: "Absolut! Componentele aerodinamice moderne sunt proiectate pentru utilizare zilnică, oferind beneficii atât pe strada cât și pe circuit."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Optimizare Aerodinamică Auto - Splitter, Spoiler, Diffuser | DROSU Engineering Valcea"
        description="Servicii profesionale de optimizare aerodinamică pentru mașini de strada și curse în Râmnicu Vâlcea. Splitter, spoiler, diffuser și multe altele. Prețuri de la 1200 RON."
        keywords="optimizare aerodinamica, splitter auto, spoiler auto, diffuser auto, componente aerodinamice, tuning aerodinamic valcea, modificări aerodinamice valcea"
        url="https://www.drosuengineering.com/servicii/optimizare-aerodinamica"
        serviceSchema={{
          name: "Optimizare Aerodinamică",
          description: "Optimizarea aerodinamică a vehiculului pentru stabilitate la viteze înalte și consum redus",
          serviceType: "Auto Aerodynamic Optimization",
          areaServed: "Râmnicu Vâlcea",
          provider: {
            name: "DROSU Engineering",
            telephone: "+40-726-960-376"
          }
        }}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Servicii", url: "/#services" },
          { name: "Optimizare Aerodinamică", url: "/servicii/optimizare-aerodinamica" }
        ]}
        isLocalBusiness={true}
      />
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
          <Breadcrumbs items={[
            { name: "Servicii", url: "/#services" },
            { name: "Optimizare Aerodinamică", url: "/servicii/optimizare-aerodinamica" }
          ]} />

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
                <Wind className="w-10 h-10 text-performance-red" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
                Optimizare Aerodinamică - 
                <span className="text-performance-red"> Performanță Maximă</span>
              </h1>
              <p className="text-xl text-steel-gray mb-8 max-w-3xl mx-auto">
                Optimizarea aerodinamică a vehiculului pentru stabilitate la viteze înalte, 
                consum redus și performanță superioară pe strada și circuit.
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
                Gata să Optimizezi Aerodinamica Mașinii Tale?
              </h2>
              <p className="text-steel-gray mb-6">
                Contactează-ne pentru o consultanță gratuită și ofertă personalizată.
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

export default OptimizareAerodinamica;
