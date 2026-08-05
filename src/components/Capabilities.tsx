const items = [
  {
    title: "Performanță Stradă",
    desc: "Upgrade-uri integrate pentru putere, aderență și utilizare zilnică.",
  },
  {
    title: "Pregătire Circuit",
    desc: "Siguranță, răcire și setup pentru timpuri de tură consistente.",
  },
  {
    title: "Build-uri Custom",
    desc: "Proiecte one-off, de la concept până la shakedown.",
  },
];

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="border-y border-white/10 bg-demo-deep"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`svc p-8 md:p-10 ${
              i < items.length - 1 ? "md:border-r border-white/10" : ""
            } border-b md:border-b-0 border-white/10`}
          >
            <div className="font-display font-semibold text-[22px] uppercase tracking-wide mb-4">
              {item.title}
            </div>
            <div className="svc-bar h-[2px] w-10 bg-demo-accent mb-4 transition-all duration-300" />
            <p className="text-[15px] leading-relaxed text-demo-dim">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
