import { 
  Cpu, 
  Wrench, 
  Gauge, 
  Car, 
  Zap, 
  Settings2,
  ArrowRight 
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Remapare ECU",
      description: "Optimizarea sistemului de management al motorului pentru performanță maximă și eficiență sporită.",
      features: ["Creștere putere 20-40%", "Reducere consum", "Eliminare limitări"],
      price: "de la 800 RON"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Modificări Hardware",
      description: "Instalarea și configurarea pieselor de performanță pentru upgrade-uri complete.",
      features: ["Turbo/Supercharger", "Admisie sport", "Evacuare performanță"],
      price: "de la 1500 RON"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Testare Dyno",
      description: "Măsurarea precisă a performanței vehiculului pe bancul nostru de testare.",
      features: ["Putere & cuplu", "Analiză detaliată", "Înainte/după modificări"],
      price: "de la 300 RON"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Suspensie Sport",
      description: "Upgrade-uri complete ale sistemului de suspensie pentru handling superior.",
      features: ["Arcuri sport", "Amortizoare reglabile", "Stabilizatoare"],
      price: "de la 2000 RON"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimizare Transmisie",
      description: "Îmbunătățirea răspunsului și performanței cutiei de viteze.",
      features: ["Recalibrare TCU", "Schimbări rapide", "Sport mode"],
      price: "de la 600 RON"
    },
    {
      icon: <Settings2 className="w-8 h-8" />,
      title: "Mentenanță Specializată",
      description: "Servicii complete de mentenanță pentru vehiculele modificate.",
      features: ["Diagnostic avansat", "Înlocuire piese", "Verificări periodice"],
      price: "de la 200 RON"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-carbon-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Serviciile Noastre
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
            Soluții Complete de
            <span className="text-performance-red"> Performanță</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            De la optimizări software la modificări hardware complexe, oferim servicii complete 
            pentru maximizarea potențialului vehiculului tău.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300 hover:shadow-performance group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-chrome-white mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-steel-gray mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-steel-gray">
                      <div className="w-2 h-2 bg-performance-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-performance-orange font-bold text-lg">
                    {service.price}
                  </span>
                  <Button variant="ghost" size="sm" className="text-performance-red hover:text-chrome-white group">
                    Detalii
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="performance" 
            size="xl"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Solicită Ofertă Personalizată
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;