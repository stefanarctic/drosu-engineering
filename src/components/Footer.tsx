import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import drosuLogo from "../assets/drosu-logo.png";
import WhatsAppIcon from "./ui/whatsapp-icon";

const Footer = () => {
  const services = [
    "Modificări Hardware",
    "Suspensie Sport",
    "Optimizare Aerodinamică",
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
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={drosuLogo} 
                alt="DROSU Engineering Logo" 
                className="h-12 w-auto"
              />
              <div className="text-xl font-bold text-chrome-white">
                DROSU<span className="text-performance-red">Engineering</span>
              </div>
            </div>
            <p className="text-steel-gray mb-6">
              Specializați în modificări de performanță și optimizarea automobilelor. 
              Transformăm pasiunea ta în putere.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/40726960376" target="_blank" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
                <WhatsAppIcon className="w-5 h-5 text-chrome-white" />
              </a>
              <a href="https://www.instagram.com/drosu.engineering" target="_blank" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
                <Instagram className="w-5 h-5 text-chrome-white" />
              </a>
              <a href="https://youtube.com/@drosu.engineering" className="w-10 h-10 bg-carbon-gray rounded-lg flex items-center justify-center hover:bg-performance-red transition-colors">
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
                <span className="text-steel-gray">0726 960 376</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-performance-red" />
                <span className="text-steel-gray">drosuengineering@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-performance-red" />
                <span className="text-steel-gray">Strada Bujorului 5, Râmnicu Vâlcea</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-carbon-gray mt-12 pt-8 text-center">
          <p className="text-steel-gray">
            © {new Date().getFullYear()} DROSU Engineering. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;