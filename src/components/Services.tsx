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
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Modificări Hardware",
      description: "Instalarea și configurarea pieselor de performanță pentru upgrade-uri complete.",
      features: ["Admisie sport", "Intercooler performant", "Evacuare performanță"],
      price: "de la 1500 RON"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Suspensie Sport",
      description: "Upgrade-uri complete ale sistemului de suspensie pentru handling superior.",
      features: ["Arcuri sport", "Amortizoare reglabile", "Stabilizatoare"],
      price: "de la 2000 RON"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Optimizare Aerodinamică",
      description: "Optimizarea aerodinamică a vehiculului pentru stabilitate la viteze înalte și consum redus.",
      features: ["Splitter", "Spoiler", "Diffuser"],
      price: "de la 1200 RON"
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
      <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Serviciile Noastre
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
            Modificări Performanță Auto
            <span className="text-performance-red"> Râmnicu Vâlcea</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Servicii complete de modificări hardware și tuning auto pentru mașini de strada și de curse în Râmnicu Vâlcea, Județul Vâlcea. 
            De la modificări hardware complexe la modificări aerodinamice, oferim soluții complete pentru maximizarea potențialului automobilelor. 
            Experiența noastră în motorsport ne permite să oferim servicii de calitate superioară.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300 hover:shadow-performance group w-full max-w-[420px] md:max-w-none flex flex-col h-full">
              <CardHeader className="text-center md:text-left">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow mx-auto md:mx-0">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-chrome-white mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full text-center md:text-left">
                <p className="text-steel-gray mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 mx-auto md:mx-0 w-fit">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-steel-gray">
                      <div className="w-2 h-2 bg-performance-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-4 md:justify-between mt-auto">
                  <span className="text-performance-orange font-bold text-lg">
                    {service.price}
                  </span>
                  {service.title === "Modificări Hardware" ? (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-performance-red hover:text-chrome-white group"
                      asChild
                    >
                      <Link to="/servicii/modificari-hardware">
                        Detalii
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="text-performance-red hover:text-chrome-white group">
                      Detalii
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
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