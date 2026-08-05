const services = [
  {
    num: "01",
    title: "Performanță Stradă",
    desc: "Motor, evacuare, ECU, suspensie, frâne și aero — acordate pentru drumuri reale și rezultate repetabile.",
  },
  {
    num: "02",
    title: "Șasiu & Handling",
    desc: "Geometrie, coilover-e, bucșe și aliniere reglate pentru încredere pe stradă sau circuit.",
  },
  {
    num: "03",
    title: "Build-uri de Curse",
    desc: "Sisteme de siguranță, lightweighting, powertrain și packaging orientat pe circuit, de la zero.",
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px]">
      <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
        Ce facem
      </div>
      <h2 className="font-display font-bold text-[36px] md:text-[52px] uppercase leading-[1.05] max-w-[640px]">
        Upgrade-uri proiectate să lucreze împreună
      </h2>
      <p className="max-w-[620px] mt-[22px] text-lg leading-relaxed text-demo-muted">
        Fiecare build începe cu obiective clare. Proiectăm upgrade-uri care
        lucrează împreună — nu piese izolate care se contrazic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {services.map((s) => (
          <div
            key={s.num}
            className="card-do border border-white/10 bg-demo-surface p-8 md:p-[38px_34px]"
          >
            <div className="font-mono text-[13px] text-demo-accent mb-5">
              {s.num}
            </div>
            <div className="font-display font-semibold text-[24px] uppercase mb-3">
              {s.title}
            </div>
            <p className="text-[15px] leading-relaxed text-demo-dim">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
