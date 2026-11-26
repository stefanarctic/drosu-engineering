import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const modificari = [
  {
    title: "Kit Admisie Sport",
    description:
      "Îmbunătățește fluxul de aer către motor, rezultând în răspuns mai rapid și putere sporită.",
    benefits: ["Răspuns mai rapid", "Putere crescută", "Sunet sport"],
  },
  {
    title: "Sistem Evacuare Sport",
    description:
      "Reduce rezistența la evacuarea gazelor, îmbunătățind performanța și oferind sunet distinctiv.",
    benefits: ["Performanță crescută", "Sunet sport", "Consum optimizat"],
  },
  {
    title: "Suspensie Sport",
    description:
      "Arcuri și amortizoare sport pentru handling superior și stabilitate la viteze înalte.",
    benefits: ["Handling îmbunătățit", "Stabilitate crescută", "Confort optimizat"],
  },
  {
    title: "Intercooler Performant",
    description:
      "Răcește aerul de admisie mai eficient, rezultând în putere și eficiență sporite.",
    benefits: ["Putere crescută", "Eficiență îmbunătățită", "Fiabilitate"],
  },
  {
    title: "Upgrade Turbo",
    description:
      "Turbocompresor mai mare sau optimizat pentru putere semnificativ crescută.",
    benefits: ["Putere mult crescută", "Răspuns îmbunătățit", "Performanță superioară"],
  },
];

const faqItems = [
  {
    question: "Ce modificări pot face la mașina mea?",
    answer:
      "Poți face diverse modificări precum kit admisie sport, sisteme de evacuare, suspensie sport, intercooler performant, upgrade-uri turbo și multe altele. Fiecare modificare aduce beneficii specifice pentru performanță, handling sau sunet.",
  },
  {
    question: "Modificările afectează consumul de combustibil?",
    answer:
      "Depinde de tipul modificărilor. Unele modificări pot îmbunătăți eficiența (precum kit admisie optimizat), în timp ce altele pot crește consumul (precum upgrade-uri turbo agresive). Consultanța noastră te ajută să alegi modificări echilibrate.",
  },
  {
    question: "Cât costă modificările de performanță?",
    answer:
      "Prețurile variază de la 450 RON pentru un kit admisie simplu până la mii de RON pentru modificări complexe. Oferim consultanță gratuită pentru a determina ce modificări sunt potrivite pentru bugetul tău.",
  },
  {
    question: "Modificările sunt legale în România?",
    answer:
      "Majoritatea modificărilor sunt legale dacă respectă normele RAR și trec ITP-ul. Te ajutăm să alegi modificări conforme cu legislația română și să obții aprobările necesare.",
  },
];

const publishedDate = "2024-01-15";
const modifiedDate = "2024-01-15";

const CeModificariPotFace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-demo-bg text-white">
      <SEO
        title="Ce Modificări Poți Face la Mașina Ta - Ghid Complet 2024 | DROSU Engineering"
        description="Ghid complet despre modificările de performanță pe care le poți face la mașina ta: kit admisie, evacuare sport, suspensie, intercooler și multe altele. Consultanță gratuită în Râmnicu Vâlcea."
        keywords="ce modificări pot face la mașina mea, modificări performanță auto, ghid modificări mașină, ce piese pot pune la mașina mea, modificări legale mașină românia"
        url="https://www.drosuengineering.com/blog/ce-modificari-pot-face"
        type="article"
        publishedTime={publishedDate}
        modifiedTime={modifiedDate}
        author="DROSU Engineering"
        section="Ghiduri Auto"
        tags={["modificări performanță", "ghid auto", "tuning", "piese performanță"]}
        faqSchema={faqItems}
        breadcrumbs={[
          { name: "Blog", url: "/#blog" },
          { name: "Ce Modificări Pot Face", url: "/blog/ce-modificari-pot-face" },
        ]}
        isLocalBusiness={false}
      />
      <AnnouncementBar />
      <Header />

      <main className="max-w-[800px] mx-auto px-5 md:px-10 pt-12 pb-20 md:pb-[110px]">
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/#blog" },
            { name: "Ce Modificări Pot Face", url: "/blog/ce-modificari-pot-face" },
          ]}
        />

        <article>
          <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
            Ghid Auto
          </div>
          <h1 className="font-display font-bold text-[36px] md:text-[48px] uppercase leading-[1.05] mb-5">
            Ce Modificări Poți Face la Mașina Ta — Ghid Complet
          </h1>
          <p className="text-lg leading-relaxed text-demo-muted mb-6">
            Descoperă cele mai populare modificări de performanță pe care le
            poți face la mașina ta și cum te pot ajuta să obții rezultatele
            dorite.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-demo-dim font-mono tracking-wide mb-12">
            <span>
              Publicat:{" "}
              {new Date(publishedDate).toLocaleDateString("ro-RO")}
            </span>
            <span className="text-white/20">·</span>
            <span>DROSU Engineering</span>
          </div>

          <div className="border-l-2 border-demo-accent bg-demo-surface p-6 mb-12">
            <p className="text-[17px] leading-relaxed text-demo-muted">
              <span className="text-white font-semibold">Răspuns scurt:</span>{" "}
              Poți face diverse modificări de performanță la mașina ta, inclusiv
              kit admisie sport, sisteme de evacuare, suspensie sport,
              intercooler performant și upgrade-uri turbo. Fiecare modificare
              aduce beneficii specifice pentru performanță, handling sau sunet.
              Recomandăm consultanță profesională pentru a alege modificările
              potrivite pentru vehiculul tău.
            </p>
          </div>

          <p className="text-[17px] leading-relaxed text-demo-muted mb-12">
            Dacă ești pasionat de performanță auto și vrei să îți îmbunătățești
            mașina, există multe modificări pe care le poți face. În acest ghid
            complet, explorăm cele mai populare modificări de performanță
            disponibile pentru mașinile de strada și de curse.
          </p>

          <h2 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-8">
            Top 5 Modificări de Performanță
          </h2>

          <div className="space-y-5 mb-14">
            {modificari.map((modificare, index) => (
              <div
                key={modificare.title}
                className="border border-white/10 bg-demo-surface p-6 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-[13px] text-demo-accent shrink-0 pt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[22px] uppercase mb-2">
                      {modificare.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-demo-dim mb-4">
                      {modificare.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {modificare.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="font-mono text-[11px] tracking-[0.08em] uppercase text-demo-muted border border-white/10 px-3 py-1.5"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-6">
            Cum Să Alegi Modificările Potrivite
          </h2>
          <p className="text-[17px] leading-relaxed text-demo-muted mb-5">
            Alegerea modificărilor potrivite depinde de mai mulți factori:
          </p>
          <ul className="space-y-4 mb-14 text-[16px] leading-relaxed text-demo-muted">
            <li className="flex gap-3">
              <span className="text-demo-accent shrink-0">→</span>
              <span>
                <span className="text-white font-medium">Obiectivul tău:</span>{" "}
                Vrei mai multă putere, handling mai bun, sau sunet mai sport?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-demo-accent shrink-0">→</span>
              <span>
                <span className="text-white font-medium">Bugetul disponibil:</span>{" "}
                Modificările variază de la câteva sute la mii de RON.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-demo-accent shrink-0">→</span>
              <span>
                <span className="text-white font-medium">Legalitatea:</span>{" "}
                Asigură-te că modificările respectă normele RAR și trec ITP-ul.
              </span>
            </li>
          </ul>

          <h2 className="font-display font-bold text-[28px] md:text-[34px] uppercase leading-none mb-6">
            De Ce Să Alegi DROSU Engineering
          </h2>
          <p className="text-[17px] leading-relaxed text-demo-muted mb-14">
            La DROSU Engineering din Râmnicu Vâlcea, oferim consultanță gratuită
            pentru a te ajuta să alegi modificările potrivite pentru mașina ta.
            Cu experiență în motorsport și atenție la detalii, transformăm fiecare
            vehicul într-o mașină de performanță.
          </p>

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
              Gata să îți Modifici Mașina?
            </h3>
            <p className="text-demo-muted max-w-[440px] mx-auto mb-8 leading-relaxed">
              Contactează-ne pentru o consultanță gratuită și află ce
              modificări sunt potrivite pentru vehiculul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                to="/#contact"
                className="btn-fill bg-white text-demo-bg font-semibold text-[15px] px-8 py-[15px]"
              >
                Solicită Consultanță Gratuită
              </Link>
              <Link
                to="/#services"
                className="btn-out border border-white/30 text-white font-semibold text-[15px] px-8 py-[15px]"
              >
                Vezi Serviciile
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
            to="/blog/top-5-modificari-performanta"
            className="text-demo-muted hover:text-white transition-colors text-[15px]"
          >
            Top 5 Modificări →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CeModificariPotFace;
