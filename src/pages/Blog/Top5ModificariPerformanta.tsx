import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Top5ModificariPerformanta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modifications = [
    {
      rank: 1,
      title: "Kit Admisie Sport",
      description: "Unul dintre cele mai eficiente upgrade-uri pentru creșterea puterii motorului.",
      benefits: [
        "Creștere putere cu 10-15%",
        "Răspuns mai rapid la accelerație",
        "Sunet sport distinctiv",
        "Instalare relativ simplă"
      ],
      price: "de la 450 RON",
      link: "/piese/kit-admisie"
    },
    {
      rank: 2,
      title: "Sistem Evacuare Sport",
      description: "Optimizează fluxul de gaze de evacuare pentru performanță și sunet superioare.",
      benefits: [
        "Creștere putere cu 8-12%",
        "Reducere greutate",
        "Sunet sport autentic",
        "Durabilitate crescută"
      ],
      price: "de la 800 RON"
    },
    {
      rank: 3,
      title: "Upgrade Suspensie Sport",
      description: "Îmbunătățește handling-ul și stabilitatea pentru performanță superioară în viraje.",
      benefits: [
        "Handling îmbunătățit cu 30-40%",
        "Stabilitate crescută",
        "Reducere ruliu corp",
        "Confort optimizat"
      ],
      price: "de la 2000 RON",
      link: "/servicii/suspensie-sport"
    },
    {
      rank: 4,
      title: "Intercooler Performant",
      description: "Răcește aerul de admisie pentru densitate mai mare și putere crescută.",
      benefits: [
        "Creștere putere cu 15-20%",
        "Stabilitate termică",
        "Fiabilitate crescută",
        "Performanță consistentă"
      ],
      price: "de la 1200 RON"
    },
    {
      rank: 5,
      title: "Optimizare Aerodinamică",
      description: "Componente aerodinamice pentru stabilitate și eficiență la viteze înalte.",
      benefits: [
        "Stabilitate crescută",
        "Reducere consum cu 5-8%",
        "Downforce optimizat",
        "Aspect sport distinctiv"
      ],
      price: "de la 1200 RON",
      link: "/servicii/optimizare-aerodinamica"
    }
  ];

  const faqItems = [
    {
      question: "Care este cea mai eficientă modificare pentru începători?",
      answer: "Kit-ul de admisie sport este ideal pentru începători - oferă creșteri semnificative de putere, instalare relativ simplă și preț accesibil. Este o modificare perfectă pentru a începe călătoria ta în lumea tuning-ului."
    },
    {
      question: "Pot combina mai multe modificări pentru rezultate mai bune?",
      answer: "Absolut! Modificările se completează reciproc. De exemplu, un kit admisie combinat cu sistem evacuare și intercooler poate oferi creșteri de până la 40-50% putere. Recomandăm o consultanță pentru a planifica upgrade-urile optimale."
    },
    {
      question: "Modificările afectează garanția mașinii?",
      answer: "Da, majoritatea modificărilor pot afecta garanția de fabrică. Totuși, oferim garanție pentru piesele și serviciile noastre. Recomandăm să discuți cu dealer-ul înainte de modificări și să păstrezi piesele originale."
    },
    {
      question: "Cât costă în total toate cele 5 modificări?",
      answer: "Costul total depinde de marca și modelul mașinii tale, dar pentru majoritatea vehiculelor, cele 5 modificări principale costă între 5.000-8.000 RON. Oferim pachete complete cu reduceri pentru multiple modificări."
    },
    {
      question: "Care modificare oferă cel mai bun raport preț/performanță?",
      answer: "Kit-ul de admisie sport oferă cel mai bun raport preț/performanță - pentru aproximativ 450-800 RON obții creșteri de 10-15% putere. Este o investiție excelentă pentru început."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Top 5 Modificări Performanță Auto - Ghid Complet | DROSU Engineering Valcea"
        description="Descoperă cele mai eficiente 5 modificări de performanță pentru mașina ta. Kit admisie, evacuare sport, suspensie, intercooler și optimizare aerodinamică. Ghid complet cu prețuri și beneficii."
        keywords="top modificări performanță, modificări auto eficiente, kit admisie, evacuare sport, suspensie sport, intercooler, optimizare aerodinamică, tuning auto valcea"
        url="https://www.drosuengineering.com/blog/top-5-modificari-performanta"
        publishedTime="2025-01-15T10:00:00+02:00"
        modifiedTime="2025-01-15T10:00:00+02:00"
        section="Blog"
        tags={["modificări performanță", "tuning auto", "upgrade-uri auto", "ghiduri auto"]}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Blog", url: "/#blog" },
          { name: "Top 5 Modificări Performanță", url: "/blog/top-5-modificari-performanta" }
        ]}
      />
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 xl:max-w-[1320px] 2xl:max-w-[1500px]">
          <Breadcrumbs items={[
            { name: "Blog", url: "/#blog" },
            { name: "Top 5 Modificări Performanță", url: "/blog/top-5-modificari-performanta" }
          ]} />

          <article className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
                <TrendingUp className="w-10 h-10 text-performance-red" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-chrome-white mb-6">
                Top 5 Modificări Performanță - 
                <span className="text-performance-red"> Ghid Complet</span>
              </h1>
              <p className="text-xl text-steel-gray mb-4 max-w-3xl mx-auto">
                Descoperă cele mai eficiente modificări de performanță pentru mașina ta. 
                De la kit admisie la optimizare aerodinamică, găsește modificările perfecte pentru nevoile tale.
              </p>
              <p className="text-sm text-steel-gray text-opacity-70">
                Publicat pe 15 ianuarie 2025
              </p>
            </div>

            {/* Featured Snippet Answer */}
            <div className="mb-12 p-6 bg-gradient-to-r from-performance-red/20 to-performance-orange/20 border border-performance-red rounded-lg">
              <h2 className="text-2xl font-bold text-chrome-white mb-4">
                Care sunt cele mai eficiente modificări de performanță?
              </h2>
              <p className="text-lg text-steel-gray">
                Cele mai eficiente modificări de performanță sunt: <strong>Kit Admisie Sport</strong> (creștere 10-15% putere), 
                <strong> Sistem Evacuare Sport</strong> (creștere 8-12% putere), <strong>Upgrade Suspensie Sport</strong> (handling îmbunătățit 30-40%), 
                <strong> Intercooler Performant</strong> (creștere 15-20% putere) și <strong>Optimizare Aerodinamică</strong> (stabilitate și eficiență crescută).
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-steel-gray leading-relaxed mb-4">
                Dacă ești pasionat de performanță auto și vrei să îmbunătățești mașina ta, ai ajuns în locul potrivit. 
                În acest ghid complet, îți prezentăm <strong>top 5 modificări de performanță</strong> care oferă cel mai bun raport 
                preț/performanță și rezultate semnificative.
              </p>
              <p className="text-lg text-steel-gray leading-relaxed">
                Fie că conduci o mașină de strada sau de curse, aceste modificări te vor ajuta să obții performanță superioară, 
                handling îmbunătățit și o experiență de condus mult mai plăcută.
              </p>
            </div>

            {/* Top 5 Modifications */}
            <div className="mb-12 space-y-8">
              {modifications.map((mod) => (
                <div key={mod.rank} className="p-8 bg-card border border-carbon-gray rounded-lg hover:border-performance-red transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-chrome-white font-bold text-2xl">
                      {mod.rank}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-3xl font-bold text-chrome-white mb-3">
                        {mod.title}
                      </h2>
                      <p className="text-lg text-steel-gray mb-4">
                        {mod.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-chrome-white mb-3">Beneficii:</h3>
                        <ul className="space-y-2">
                          {mod.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-performance-red flex-shrink-0 mt-1" />
                              <span className="text-steel-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-6 pt-6 border-t border-carbon-gray">
                        <span className="text-performance-orange font-bold text-xl">
                          {mod.price}
                        </span>
                        {mod.link && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-performance-red hover:text-chrome-white"
                            asChild
                          >
                            <Link to={mod.link}>
                              Vezi Detalii
                              <Zap className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mb-12 p-8 bg-gradient-to-br from-card to-carbon-gray border border-performance-red/20 rounded-lg">
              <h2 className="text-2xl font-bold text-chrome-white mb-4">
                💡 Sfaturi pentru Modificări Optime
              </h2>
              <ul className="space-y-3 text-steel-gray">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-performance-orange flex-shrink-0 mt-1" />
                  <span><strong>Planifică modificările:</strong> Începe cu modificări simple (kit admisie) și continuă cu upgrade-uri mai complexe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-performance-orange flex-shrink-0 mt-1" />
                  <span><strong>Consultanță profesională:</strong> Discută cu specialiștii noștri pentru a planifica modificările perfecte pentru mașina ta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-performance-orange flex-shrink-0 mt-1" />
                  <span><strong>Păstrează piesele originale:</strong> Păstrează piesele originale pentru a putea reveni la configurația de fabrică dacă este necesar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-performance-orange flex-shrink-0 mt-1" />
                  <span><strong>Mentenanță regulată:</strong> După modificări, asigură-te că efectuezi mentenanță regulată pentru performanță optimă.</span>
                </li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-chrome-white mb-8 text-center">
                Întrebări Frecvente
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="p-6 bg-card border border-carbon-gray rounded-lg">
                    <h3 className="text-lg font-bold text-chrome-white mb-2">{faq.question}</h3>
                    <p className="text-steel-gray">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center p-8 bg-gradient-to-r from-performance-red/20 to-performance-orange/20 border border-performance-red rounded-lg">
              <h2 className="text-2xl font-bold text-chrome-white mb-4">
                Gata să Îmbunătățești Performanța Mașinii Tale?
              </h2>
              <p className="text-steel-gray mb-6">
                Contactează-ne pentru o consultanță gratuită și ofertă personalizată pentru modificările perfecte pentru tine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="performance" 
                  size="lg"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicită Consultanță Gratuită
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-chrome-white text-chrome-white hover:bg-chrome-white hover:text-background"
                  asChild
                >
                  <Link to="/#blog">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Înapoi la Blog
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Top5ModificariPerformanta;
