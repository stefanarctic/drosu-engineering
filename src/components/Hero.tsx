import { ArrowRight, Zap, Settings, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/poze_concurs_musetesti/IMG_1365.jpg";
import heroVideo from "@/assets/poze_concurs_musetesti/DrosuEngineeringMusetesti.mp4";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-transparent"></div>
      </div> */}

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
              Atelier de Performanță Auto
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-chrome-white mb-6 leading-tight">
              Eliberează
              <span className="text-performance-red"> Puterea</span>
              <br />
              Mașinii Tale
            </h1>
            <p className="text-xl text-steel-gray mb-8 max-w-2xl">
              Specializați în modificări de performanță, remapare ECU și optimizări complete pentru vehiculele tale. 
              Peste 10 ani de experiență în industria automotive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
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
              className="border-chrome-white text-chrome-white hover:bg-chrome-white hover:text-carbon-black"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Vezi Serviciile Noastre
            </Button>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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