const steps = [
  {
    num: "01",
    title: "Baseline & Obiective",
    desc: "Tracțiune pe dyno, inspecție și un target spec.",
  },
  {
    num: "02",
    title: "Plan & Piese",
    desc: "Fișă de build pe etape — fără piese care se contrazic.",
  },
  {
    num: "03",
    title: "Build & Fabricație",
    desc: "Montaj in-house, fabricație și calibrare ECU.",
  },
  {
    num: "04",
    title: "Verificare & Predare",
    desc: "Dyno final, date și un shakedown în care poți avea încredere.",
  },
];

const Process = () => {
  return (
    <section id="process" className="border-t border-white/10 bg-demo-deep">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
            Cum lucrăm
          </div>
          <h2 className="font-display font-bold text-[36px] md:text-[52px] uppercase leading-[1.05]">
            De la baseline
            <br />
            la build final
          </h2>
          <p className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-demo-muted">
            Spune-ne platforma și obiectivele. Trasăm un drum clar — măsurăm,
            planificăm, construim, verificăm — și susținem fiecare lucrare cu o
            consultație gratuită.
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-[22px] py-[22px] ${
                i < steps.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="font-mono text-demo-accent text-sm shrink-0">
                {step.num}
              </span>
              <div>
                <div className="font-display font-semibold text-[20px] uppercase">
                  {step.title}
                </div>
                <p className="text-sm text-demo-dim mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
