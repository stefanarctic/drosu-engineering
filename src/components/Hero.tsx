import { ArrowRight, Zap, Settings, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import fordFiestaImage from "@/assets/ford-fiesta-transparent.png";
import heroVideo from "@/assets/poze_concurs_musetesti/DrosuEngineeringMusetesti.mp4";
import { trackEvent } from "./Analytics";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black pt-20 lg:pt-0">
      {/* Content */}
      <div className="relative container mx-auto px-6 min-h-screen flex items-center bg-black pb-12 lg:py-0">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl animate-fade-in text-center lg:text-left">
          <div className="mb-6">
            {/* <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Atelier de Performanță Auto
            </span> */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-chrome-white mb-6 mt-4 leading-tight">
              Tuning Auto
              <span className="text-performance-red"> Valcea</span>
              <br />
              Performanță Maximă
            </h1>
            <p className="text-lg md:text-xl text-steel-gray mb-8 max-w-2xl mx-auto lg:mx-0">
              Transformăm mașinile tale în mașini de performanță. Modificări hardware profesionale pentru strada și curse în Râmnicu Vâlcea.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="xl" 
              className="group w-full sm:w-auto"
              onClick={() => {
                trackEvent('cta_click', {
                  cta_text: 'Consultanță Gratuită',
                  cta_location: 'hero_section',
                  cta_type: 'primary'
                });
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Consultanță Gratuită
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-chrome-white text-chrome-white hover:bg-chrome-white hover:text-carbon-black w-full sm:w-auto"
              onClick={() => {
                trackEvent('cta_click', {
                  cta_text: 'Vezi Serviciile Noastre',
                  cta_location: 'hero_section',
                  cta_type: 'secondary'
                });
                document.getElementById('services')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Vezi Serviciile Noastre
            </Button>
          </div>

          {/* Performance Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-chrome-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-chrome-white">500+</div>
                <div className="text-steel-gray">Vehicule Optimizate</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-chrome-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-chrome-white">50+</div>
                <div className="text-steel-gray">Modele Suportate</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-chrome-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-chrome-white">10+</div>
                <div className="text-steel-gray">Ani Experiență</div>
              </div>
            </div>
          </div> */}
          </div>

          {/* Ford Fiesta Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in relative lg:ml-20 lg:mt-14">
            {/* Highlight behind car */}
            <div 
              className="absolute inset-0 flex items-center justify-center lg:justify-end"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.15) 35%, transparent 70%)',
                filter: 'blur(60px)',
                transform: 'scale(1.5)',
                zIndex: 0
              }}
            />
            <img 
              src={fordFiestaImage} 
              alt="Ford Fiesta" 
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-performance-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-performance-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;