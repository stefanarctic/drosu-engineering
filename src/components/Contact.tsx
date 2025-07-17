import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      info: "+40 722 123 456",
      color: "text-performance-red"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contact@performancemotors.ro",
      color: "text-performance-orange"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresă",
      info: "Str. Performanței 123, București",
      color: "text-performance-blue"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Program",
      info: "Lun-Vin: 8:00-18:00",
      color: "text-performance-red"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-carbon-gray to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
            Hai să Discutăm
            <span className="text-performance-red"> Proiectul</span> Tău
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Contactează-ne pentru o consultanță gratuită și să îți arătăm cum putem 
            transforma vehiculul tău într-o mașină de performanță.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${item.color} bg-gradient-primary rounded-lg flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-chrome-white">
                          {item.title}
                        </h4>
                        <p className="text-steel-gray">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative overflow-hidden rounded-lg bg-card border border-carbon-gray">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-performance-red mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-chrome-white mb-2">
                    Vizitează Atelierul
                  </h4>
                  <p className="text-steel-gray">
                    Str. Performanței 123, București
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-carbon-gray">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-chrome-white">
                Solicită Consultanță
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-gray mb-2">
                      Nume
                    </label>
                    <Input 
                      placeholder="Numele tău"
                      className="bg-background border-carbon-gray focus:border-performance-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-gray mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="email@exemplu.com"
                      className="bg-background border-carbon-gray focus:border-performance-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-gray mb-2">
                    Telefon
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+40 722 123 456"
                    className="bg-background border-carbon-gray focus:border-performance-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-gray mb-2">
                    Vehicul
                  </label>
                  <Input 
                    placeholder="Marca, Model, An"
                    className="bg-background border-carbon-gray focus:border-performance-red"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-gray mb-2">
                    Mesaj
                  </label>
                  <Textarea 
                    placeholder="Descrie ce modificări dorești..."
                    className="bg-background border-carbon-gray focus:border-performance-red min-h-[120px]"
                  />
                </div>

                <Button variant="performance" size="lg" className="w-full">
                  Trimite Solicitarea
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;