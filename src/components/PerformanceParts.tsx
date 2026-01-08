import { ArrowRight, Zap, Gauge, Wrench, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import intake1 from "@/assets/kituri/kit_admisie1.jpg";
import { Link } from "react-router-dom";

const PerformanceParts = () => {
  const parts = [
    {
      title: "Kituri Admisie",
      description: "Flux de aer optimizat pentru răspuns mai rapid și putere sporită.",
      // features: ["Filtru sport", "Conducte aluminiu", "Conuri silicon"],
      price: "de la 450 RON",
      image: intake1,
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="parts" className="py-20 bg-gradient-to-b from-carbon-gray to-background">
      <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Piese de Performanță
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
            Vânzare & Montaj
            <span className="text-performance-red"> Piese Performanță</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Comercializăm piese premium pentru mașini de strada și de curse, asigurând montaj profesionist în atelier. 
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8">
          {parts.map((part, idx) => (
            <Card key={idx} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300 hover:shadow-performance group w-full max-w-[480px] h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 text-chrome-white">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                    {part.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{part.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 mt-0">
                {part.image && (
                  <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                    <img 
                      src={part.image} 
                      alt={`${part.title} - Piese performanță auto pentru mașini de strada și curse în Râmnicu Vâlcea`} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={480}
                      height={360}
                    />
                  </div>
                )}
                <p className="text-steel-gray">{part.description}</p>
                {/* <ul className="space-y-2">
                  {part.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-steel-gray">
                      <div className="w-2 h-2 bg-performance-red rounded-full mr-3"></div>
                      {f}
                    </li>
                  ))}
                </ul> */}
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-performance-orange font-bold text-lg">{part.price}</span>
                  {part.title === "Kituri Admisie" ? (
                    <Button variant="ghost" size="sm" className="text-performance-red hover:text-chrome-white group" asChild>
                      <Link to="/piese/kit-admisie">
                        Vezi detaliile
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="text-performance-red hover:text-chrome-white group" onClick={scrollToContact}>
                      Cere ofertă
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="performance" size="xl" onClick={scrollToContact}>
            Verifică disponibilitatea
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-performance-red text-performance-red hover:bg-performance-red hover:text-chrome-white"
            asChild
          >
            <Link to="/piese">
              Vezi Catalogul Complet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceParts;


