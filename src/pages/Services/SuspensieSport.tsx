import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Car, Zap, CheckCircle, ArrowLeft, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SuspensieSport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Arcuri sport reglabile pentru handling superior",
    "Amortizoare reglabile pentru confort și performanță",
    "Stabilizatoare îmbunătățite pentru stabilitate",
    "Kit-uri complete de suspensie sport",
    "Ajustări profesionale pentru curse sau strada",
    "Upgrade-uri pentru geometrie suspensie"
  ];

  const benefits = [
    "Handling îmbunătățit în viraje",
    "Stabilitate crescută la viteze înalte",
    "Răspuns mai precis la comenzile de direcție",
    "Reducere semnificativă a ruliului corpului",
    "Confort optimizat pentru utilizare zilnică",
    "Performanță superioară pe circuit"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Evaluare și Consultanță",
      description: "Analizăm stilul tău de condus și obiectivele pentru a recomanda configurația optimă de suspensie."
    },
    {
      step: 2,
      title: "Selecție Piese",
      description: "Alegem arcuri, amortizoare și componente de suspensie de la producători de top."
    },
    {
      step: 3,
      title: "Instalare Profesionistă",
      description: "Echipa noastră instalează și reglează suspensia cu precizie pentru performanță maximă."
    },
    {
      step: 4,
      title: "Testare și Fine-tuning",
      description: "Testăm vehiculul și ajustăm setările pentru a obține comportamentul dorit."
    }
  ];

  const faqItems = [
    {
      question: "Ce include un upgrade de suspensie sport?",
      answer: "Un upgrade complet include arcuri sport, amortizoare reglabile, stabilizatoare îmbunătățite și ajustarea geometriei suspensiei. Poți alege și upgrade-uri parțiale în funcție de buget și nevoi."
    },
    {
      question: "Suspensia sport afectează confortul?",
      answer: "Suspensiile sport moderne sunt proiectate să ofere un echilibru între performanță și confort. Cu amortizoare reglabile, poți ajusta rigiditatea în funcție de nevoile tale."
    },
    {
      question: "Cât durează instalarea unei suspensii sport?",
      answer: "Instalarea unei suspensii sport complete durează de obicei 1-2 zile, în funcție de complexitatea vehiculului și de tipul de upgrade-uri alese."
    },
    {
      question: "Suspensia sport este legală în România?",
      answer: "Da, suspensiile sport sunt legale dacă respectă normele RAR și vehiculul trece ITP-ul. Te ajutăm să alegi componente conforme cu legislația română."
    },
    {
      question: "Pot folosi mașina cu suspensie sport zilnic?",
      answer: "Absolut! Suspensiile sport moderne sunt proiectate pentru utilizare zilnică, oferind performanță superioară fără a compromite confortul."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Suspensie Sport Auto - Upgrade-uri Profesionale | DROSU Engineering Valcea"
        description="Servicii profesionale de upgrade suspensie sport pentru mașini de strada și curse în Râmnicu Vâlcea. Arcuri sport, amortizoare reglabile, stabilizatoare. Prețuri de la 2000 RON."
        keywords="suspensie sport, arcuri sport, amortizoare reglabile, upgrade suspensie, handling auto, tuning suspensie valcea, modificări suspensie valcea"
        url="https://www.drosuengineering.com/servicii/suspensie-sport"
        serviceSchema={{
          name: "Suspensie Sport",
          description: "Upgrade-uri complete ale sistemului de suspensie pentru handling superior și performanță optimă",
          serviceType: "Auto Suspension Upgrade",
          areaServed: "Râmnicu Vâlcea",
          provider: {
            name: "DROSU Engineering",
            telephone: "+40-726-960-376"
          }
        }}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Servicii", url: "/#services" },
          { name: "Suspensie Sport", url: "/servicii/suspensie-sport" }
        ]}
        isLocalBusiness={true}
      />
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
          <Breadcrumbs items={[
            { name: "Servicii", url: "/#services" },
            { name: "Suspensie Sport", url: "/servicii/suspensie-sport" }
          ]} />

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
                <Car className="w-10 h-10 text-performance-red" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
                Suspensie Sport - 
                <span className="text-performance-red"> Handling Maxim</span>
              </h1>
              <p className="text-xl text-steel-gray mb-8 max-w-3xl mx-auto">
                Upgrade-uri complete ale sistemului de suspensie pentru handling superior, 
                stabilitate crescută și performanță optimă pe strada și circuit.
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
                Gata să Îmbunătățești Suspensia Mașinii Tale?
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

export default SuspensieSport;
