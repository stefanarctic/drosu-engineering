import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import drosuLogo from "../assets/drosu-logo.png";

const Footer = () => {
  const services = [
    "Remapare ECU",
    "Modificări Hardware",
    "Testare Dyno",
    "Suspensie Sport",
    "Optimizare Transmisie",
    "Mentenanță Specializată"
  ];

  const brands = [
    "Volkswagen", "Audi", "BMW", "Mercedes", "Porsche", "Škoda", "SEAT", "Ford", "Opel", "Renault"
  ];

  return (
    <footer className="bg-carbon-black border-t border-carbon-gray">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-chrome-white font-bold text-xl">DE</span>
              </div>
              <div className="text-xl font-bold text-chrome-white">
                DROSU<span className="text-performance-red">Engineering</span>
              </div>
            </div>
            <p className="text-steel-gray mb-6">
              Specializați în modificări de performanță și optimizarea vehiculelor. 
              Transformăm pasiunea ta în putere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
                <Facebook className="w-5 h-5 text-chrome-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
                <Instagram className="w-5 h-5 text-chrome-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
                <Youtube className="w-5 h-5 text-chrome-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-chrome-white mb-6">
              Servicii
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-steel-gray hover:text-performance-red transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold text-chrome-white mb-6">
              Mărci Suportate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((brand, index) => (
                <div key={index} className="text-steel-gray text-sm">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-chrome-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-performance-red" />
                <span className="text-steel-gray">+40 722 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-performance-red" />
                <span className="text-steel-gray">contact@drosuengineering.ro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-performance-red" />
                <span className="text-steel-gray">Str. Performanței 123, București</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-carbon-gray mt-12 pt-8 text-center">
          <p className="text-steel-gray">
            © 2024 DROSU Engineering. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;