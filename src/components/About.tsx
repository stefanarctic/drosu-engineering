import { Award, Users, Clock, Star } from "lucide-react";
import drosuWinImage from "@/assets/Drosu_Engineering_Win2.jpg";
// Old imports - commented out
// import workshopImage from "@/assets/garaj.png";
// import engineImage from "@/assets/engine.png";

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "500+",
      label: "Proiecte Finalizate",
      color: "text-performance-red"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "300+",
      label: "Clienți Mulțumiți",
      color: "text-performance-orange"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "10+",
      label: "Ani Experiență",
      color: "text-performance-blue"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "98%",
      label: "Satisfacție Clienți",
      color: "text-performance-red"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Despre Noi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
              Atelier Performanță Auto
              <span className="text-performance-red"> Râmnicu Vâlcea</span>
            </h2>
            <p className="text-xl text-steel-gray mb-8">
              DROSU Engineering este un atelier specializat în modificări de performanță și tuning auto pentru mașini de strada și de curse în Râmnicu Vâlcea, Județul Vâlcea. 
              Cu experiență în motorsport și atenție la detalii, oferim servicii profesionale de modificări hardware, 
              transformând fiecare automobil într-o mașină de performanță. Specializați în tuning auto Valcea, modificări performanță și piese performanță.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-chrome-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-chrome-white mb-2">
                    Experiență Specializată
                  </h4>
                  <p className="text-steel-gray">
                    Echipa noastră de specialiști certificați lucrează cu tehnologia 
                    cea mai avansată pentru rezultate garantate.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-chrome-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-chrome-white mb-2">
                    Abordare Personalizată
                  </h4>
                  <p className="text-steel-gray">
                    Fiecare proiect este adaptat nevoilor specifice ale clientului 
                    pentru rezultate optime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-chrome-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-chrome-white mb-2">
                    Suport Continuu
                  </h4>
                  <p className="text-steel-gray">
                    Oferim suport tehnic și mentenanță pe termen lung pentru 
                    toate modificările realizate.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} text-3xl font-bold mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-steel-gray text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Images */}
          <div className="space-y-6">
            {/* New single portrait image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={drosuWinImage} 
                alt="DROSU Engineering - Echipa și rezultate în motorsport, atelier performanță auto Râmnicu Vâlcea" 
                className="w-5/6 h-[36rem] object-cover hover:scale-105 transition-transform duration-300 mx-auto md:mx-0"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px' }}
                loading="lazy"
                width={600}
                height={864}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 to-transparent"></div>
              {/* <div className="absolute bottom-4 left-4 text-chrome-white">
                <h4 className="text-lg font-semibold">Drosu Engineering</h4>
                <p className="text-steel-gray">Performanță și excelență</p>
              </div> */}
            </div>

            {/* Old code - commented out
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={workshopImage} 
                alt="Workshop Interior" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-chrome-white">
                <h4 className="text-lg font-semibold">Echipamente Moderne</h4>
                <p className="text-steel-gray">Tehnologie de ultimă generație</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={engineImage} 
                alt="Engine Performance" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-chrome-white">
                <h4 className="text-lg font-semibold">Modificări Precision</h4>
                <p className="text-steel-gray">Atenție la detalii</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;