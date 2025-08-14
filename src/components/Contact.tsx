import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      message: ""
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      info: "0726 960 376",
      color: "text-performance-red"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      info: "contact@drosuengineering.com",
      color: "text-performance-orange"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresă",
      info: "Strada Bujorului 5, Râmnicu Vâlcea",
      color: "text-performance-blue"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Program",
      info: "Lun-Vin: 8:00-18:00",
      color: "text-performance-red"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-carbon-gray to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-performance-red/20 text-performance-red rounded-full text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-chrome-white mb-4">
            Hai să Discutăm
            <span className="text-performance-red"> Proiectul</span> Tău
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Contactează-ne pentru o consultanță gratuită și să îți arătăm cum putem 
            transforma vehiculul tău într-o mașină de performanță.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300 hover:shadow-glow group">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        item.color === 'text-performance-red' ? 'bg-gradient-to-br from-performance-red to-performance-red/80' :
                        item.color === 'text-performance-orange' ? 'bg-gradient-to-br from-performance-orange to-performance-orange/80' :
                        item.color === 'text-performance-blue' ? 'bg-gradient-to-br from-performance-blue to-performance-blue/80' :
                        'bg-gradient-to-br from-performance-red to-performance-red/80'
                      }`}>
                        <div className="text-chrome-white">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-chrome-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-steel-gray">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative overflow-hidden rounded-lg bg-card border border-carbon-gray hover:border-performance-red transition-all duration-300">
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-carbon-gray to-carbon-black">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-performance-red mx-auto mb-4 animate-float" />
                  <h4 className="text-xl font-semibold text-chrome-white mb-2">
                    Vizitează Atelierul
                  </h4>
                  <p className="text-steel-gray mb-4">
                    Strada Bujorului 5, Râmnicu Vâlcea
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-performance-red text-performance-red hover:bg-performance-red hover:text-chrome-white"
                    onClick={() => window.open('https://www.google.com/maps/place/Strada+Bujorului+5,+Râmnicu+Vâlcea/@45.1101662,24.3673393,20.25z/data=!4m6!3m5!1s0x474d38b72a848e35:0x941e30b0f202114!8m2!3d45.1101785!4d24.3673623!16s%2Fg%2F11mtg_dmy0?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                  >
                    Vezi pe Hartă
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-carbon-gray hover:border-performance-red transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-chrome-white flex items-center gap-2">
                <Send className="w-5 h-5 text-performance-red" />
                Solicită Consultanță
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-12 h-12 text-performance-red mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-chrome-white mb-2">
                    Mesajul a fost trimis!
                  </h3>
                  <p className="text-steel-gray mb-3">
                    Mulțumim pentru solicitare. Vom reveni în cel mai scurt timp.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="border-performance-red text-performance-red hover:bg-performance-red hover:text-chrome-white"
                  >
                    Trimite alt mesaj
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-gray mb-2">
                        Nume *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Numele tău"
                        className="bg-background border-carbon-gray focus:border-performance-red focus:ring-performance-red/20 transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-gray mb-2">
                        Email *
                      </label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@exemplu.com"
                        className="bg-background border-carbon-gray focus:border-performance-red focus:ring-performance-red/20 transition-all duration-300"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-gray mb-2">
                      Telefon
                    </label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+40 722 123 456"
                      className="bg-background border-carbon-gray focus:border-performance-red focus:ring-performance-red/20 transition-all duration-300"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-gray mb-2">
                      Vehicul
                    </label>
                    <Input 
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      placeholder="Marca, Model, An"
                      className="bg-background border-carbon-gray focus:border-performance-red focus:ring-performance-red/20 transition-all duration-300"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-gray mb-2">
                      Mesaj *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descrie ce modificări dorești..."
                      className="bg-background border-carbon-gray focus:border-performance-red focus:ring-performance-red/20 transition-all duration-300 min-h-[100px] resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="performance" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-chrome-white border-t-transparent rounded-full animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        Trimite Solicitarea
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;