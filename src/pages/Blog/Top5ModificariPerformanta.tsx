import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const modifications = [
  {
    rank: 1,
    title: "Kit Admisie Sport",
    description:
      "Unul dintre cele mai eficiente upgrade-uri pentru creșterea puterii motorului.",
    benefits: [
      "Creștere putere cu 10-15%",
      "Răspuns mai rapid la accelerație",
      "Sunet sport distinctiv",
      "Instalare relativ simplă",
    ],
    price: "de la 450 RON",
    link: "/piese/kit-admisie",
  },
  {
    rank: 2,
    title: "Sistem Evacuare Sport",
    description:
      "Optimizează fluxul de gaze de evacuare pentru performanță și sunet superioare.",
    benefits: [
      "Creștere putere cu 8-12%",
      "Reducere greutate",
      "Sunet sport autentic",
      "Durabilitate crescută",
    ],
    price: "de la 800 RON",
  },
  {
    rank: 3,
    title: "Upgrade Suspensie Sport",
    description:
      "Îmbunătățește handling-ul și stabilitatea pentru performanță superioară în viraje.",
    benefits: [
      "Handling îmbunătățit cu 30-40%",
      "Stabilitate crescută",
      "Reducere ruliu corp",
      "Confort optimizat",
    ],
    price: "de la 2000 RON",
    link: "/servicii/suspensie-sport",
  },
  {
    rank: 4,
    title: "Intercooler Performant",
    description:
      "Răcește aerul de admisie pentru densitate mai mare și putere crescută.",
    benefits: [
      "Creștere putere cu 15-20%",
      "Stabilitate termică",
      "Fiabilitate crescută",
      "Performanță consistentă",
    ],
    price: "de la 1200 RON",
  },
  {
    rank: 5,
    title: "Optimizare Aerodinamică",
    description:
      "Componente aerodinamice pentru stabilitate și eficiență la viteze înalte.",
    benefits: [
      "Stabilitate crescută",
      "Reducere consum cu 5-8%",
      "Downforce optimizat",
      "Aspect sport distinctiv",
    ],
    price: "de la 1200 RON",
    link: "/servicii/optimizare-aerodinamica",
  },
];

const faqItems = [
  {
    question: "Care este cea mai eficientă modificare pentru începători?",
    answer:
      "Kit-ul de admisie sport este ideal pentru începători - oferă creșteri semnificative de putere, instalare relativ simplă și preț accesibil. Este o modificare perfectă pentru a începe călătoria ta în lumea tuning-ului.",
  },
  {
    question: "Pot combina mai multe modificări pentru rezultate mai bune?",
    answer:
      "Absolut! Modificările se completează reciproc. De exemplu, un kit admisie combinat cu sistem evacuare și intercooler poate oferi creșteri de până la 40-50% putere. Recomandăm o consultanță pentru a planifica upgrade-urile optimale.",
  },
  {
    question: "Modificările afectează garanția mașinii?",
    answer:
      "Da, majoritatea modificărilor pot afecta garanția de fabrică. Totuși, oferim garanție pentru piesele și serviciile noastre. Recomandăm să discuți cu dealer-ul înainte de modificări și să păstrezi piesele originale.",
  },
  {
    question: "Cât costă în total toate cele 5 modificări?",
    answer:
      "Costul total depinde de marca și modelul mașinii tale, dar pentru majoritatea vehiculelor, cele 5 modificări principale costă între 5.000-8.000 RON. Oferim pachete complete cu reduceri pentru multiple modificări.",
  },
  {
    question: "Care modificare oferă cel mai bun raport preț/performanță?",
    answer:
      "Kit-ul de admisie sport oferă cel mai bun raport preț/performanță - pentru aproximativ 450-800 RON obții creșteri de 10-15% putere. Este o investiție excelentă pentru început.",
  },
];

const tips = [
  {
    title: "Planifică modificările",
    text: "Începe cu modificări simple (kit admisie) și continuă cu upgrade-uri mai complexe.",
  },
  {
    title: "Consultanță profesională",
    text: "Discută cu specialiștii noștri pentru a planifica modificările perfecte pentru mașina ta.",
  },
  {
    title: "Păstrează piesele originale",
    text: "Păstrează piesele originale pentru a putea reveni la configurația de fabrică dacă este necesar.",
  },
  {
    title: "Mentenanță regulată",
    text: "După modificări, asigură-te că efectuezi mentenanță regulată pentru performanță optimă.",
  },
];

const Top5ModificariPerformanta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-demo-bg text-white">
      <SEO
        title="Top 5 Modificări Performanță Auto - Ghid Complet | DROSU Engineering Valcea"
        description="Descoperă cele mai eficiente 5 modificări de performanță pentru mașina ta. Kit admisie, evacuare sport, suspensie, intercooler și optimizare aerodinamică. Ghid complet cu prețuri și beneficii."
        keywords="top modificări performanță, modificări auto eficiente, kit admisie, evacuare sport, suspensie sport, intercooler, optimizare aerodinamică, tuning auto valcea"
        url="https://www.drosuengineering.com/blog/top-5-modificari-performanta"
        publishedTime="2025-01-15T10:00:00+02:00"
        modifiedTime="2025-01-15T10:00:00+02:00"
        section="Blog"
        tags={[
          "modificări performanță",
          "tuning auto",
          "upgrade-uri auto",
          "ghiduri auto",
        ]}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Blog", url: "/#blog" },
          {
            name: "Top 5 Modificări Performanță",
            url: "/blog/top-5-modificari-performanta",
          },
        ]}
      />
      <AnnouncementBar />
      <Header />

      <main className="max-w-[800px] mx-auto px-5 md:px-10 pt-12 pb-20 md:pb-[110px]">
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/#blog" },
            {
              name: "Top 5 Modificări Performanță",
              url: "/blog/top-5-modificari-performanta",
            },
          ]}
        />

        <article>
          <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
            Ghid Performanță
          </div>
          <h1 className="font-display font-bold text-[36px] md:text-[48px] uppercase leading-[1.05] mb-5">
            Top 5 Modificări Performanță — Ghid Complet
          </h1>
          <p className="text-lg leading-relaxed text-demo-muted mb-6">
            Descoperă cele mai eficiente modificări de performanță pentru
            mașina ta. De la kit admisie la optimizare aerodinamică, găsește
            modificările perfecte pentru nevoile tale.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-demo-dim font-mono tracking-wide mb-12">
            <span>Publicat: 15 ianuarie 2025</span>
            <span className="text-white/20">·</span>
            <span>DROSU Engineering</span>
          </div>

          <div className="border-l-2 border-demo-accent bg-demo-surface p-6 mb-12">
            <h2 className="font-display font-semibold text-[20px] uppercase mb-3">
              Care sunt cele mai eficiente modificări?
            </h2>
            <p className="text-[17px] leading-relaxed text-demo-muted">
              Cele mai eficiente modificări de performanță sunt:{" "}
              <span className="text-white">Kit Admisie Sport</span> (creștere
              10-15% putere),{" "}
              <span className="text-white">Sistem Evacuare Sport</span>{" "}
              (creștere 8-12% putere),{" "}
              <span className="text-white">Upgrade Suspensie Sport</span>{" "}
              (handling îmbunătățit 30-40%),{" "}
              <span className="text-white">Intercooler Performant</span>{" "}
              (creștere 15-20% putere) și{" "}
              <span className="text-white">Optimizare Aerodinamică</span>{" "}
              (stabilitate și eficiență crescută).
            </p>
          </div>

          <p className="text-[17px] leading-relaxed text-demo-muted mb-5">
            Dacă ești pasionat de performanță auto și vrei să îmbunătățești
            mașina ta, ai ajuns în locul potrivit. În acest ghid complet, îți
            prezentăm{" "}
            <span className="text-white">top 5 modificări de performanță</span>{" "}
            care oferă cel mai bun raport preț/performanță și rezultate
            semnificative.
          </p>
          <p className="text-[17px] leading-relaxed text-demo-muted mb-14">
            Fie că conduci o mașină de strada sau de curse, aceste modificări te
            vor ajuta să obții performanță superioară, handling îmbunătățit și
            o experiență de condus mult mai plăcută.
          </p>

          <div className="space-y-5 mb-14">
            {modifications.map((mod) => (
              <div
                key={mod.rank}
                className="border border-white/10 bg-demo-surface p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-[13px] text-demo-accent shrink-0 pt-1">
                    0{mod.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-semibold text-[22px] md:text-[26px] uppercase mb-2">
                      {mod.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-demo-dim mb-5">
                      {mod.description}
                    </p>
                    <div className="mb-5">
                      <div className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase mb-3">
                        Beneficii
                      </div>
                      <ul className="space-y-2">
                        {mod.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex gap-3 text-[15px] text-demo-muted"
                          >
                            <span className="text-demo-accent shrink-0">→</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
                      <span className="font-mono text-[14px] text-demo-accent tracking-wide">
                        {mod.price}
                      </span>
                      {mod.link && (
                        <Link
                          to={mod.link}
                          className="text-[14px] font-semibold text-white hover:text-demo-accent transition-colors"
                        >
                          Vezi detalii →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-8">
            Sfaturi pentru Modificări Optime
          </h2>
          <div className="space-y-4 mb-14">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="border border-white/10 bg-demo-surface p-6"
              >
                <h3 className="font-display font-semibold text-[18px] uppercase mb-2">
                  {tip.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-demo-dim">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-8">
            Întrebări Frecvente
          </h2>
          <div className="space-y-4 mb-14">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 bg-demo-surface p-6"
              >
                <h3 className="font-display font-semibold text-[18px] uppercase mb-2">
                  {faq.question}
                </h3>
                <p className="text-[15px] leading-relaxed text-demo-dim">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-demo-surface px-6 py-12 md:px-10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-1 bg-demo-accent" />
            <h3 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-4">
              Gata să Îmbunătățești Performanța?
            </h3>
            <p className="text-demo-muted max-w-[440px] mx-auto mb-8 leading-relaxed">
              Contactează-ne pentru o consultanță gratuită și ofertă
              personalizată pentru modificările potrivite.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                to="/#contact"
                className="btn-fill bg-white text-demo-bg font-semibold text-[15px] px-8 py-[15px]"
              >
                Solicită Consultanță Gratuită
              </Link>
              <Link
                to="/#blog"
                className="btn-out border border-white/30 text-white font-semibold text-[15px] px-8 py-[15px]"
              >
                Înapoi la Blog
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            to="/#blog"
            className="text-demo-muted hover:text-white transition-colors text-[15px]"
          >
            ← Înapoi la Blog
          </Link>
          <Link
            to="/blog/ce-modificari-pot-face"
            className="text-demo-muted hover:text-white transition-colors text-[15px]"
          >
            Ce Modificări Pot Face →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Top5ModificariPerformanta;
