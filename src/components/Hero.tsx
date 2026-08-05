import heroImage from "@/assets/demo/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-[1280px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <div>
        <div className="font-mono text-[13px] tracking-[0.32em] text-demo-dim uppercase mb-[30px]">
          Performanță · Fabricație · Tuning
        </div>
        <h1 className="font-display font-bold text-[48px] sm:text-[62px] lg:text-[78px] leading-[0.96] uppercase tracking-[-0.005em]">
          Mașini de stradă mai rapide.
          <br />
          Build-uri de curse{" "}
          <span className="text-demo-accent">serioase.</span>
        </h1>
        <p className="max-w-[480px] mt-7 text-lg leading-relaxed text-demo-muted">
          Modificăm mașini de stradă pentru performanță măsurabilă — putere,
          handling, frânare și fiabilitate — și livrăm proiecte de curse
          personalizate, construite după specificațiile tale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 mt-10">
          <a
            href="#contact"
            className="btn-fill bg-white text-demo-bg font-semibold text-[15px] px-[30px] py-[15px] text-center"
          >
            Începe un proiect
          </a>
          <a
            href="#shop"
            className="btn-out border-white/30 text-white font-semibold text-[15px] px-[30px] py-[15px] text-center"
          >
            Vezi piesele
          </a>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-12 mt-[54px] pt-[30px] border-t border-white/10">
          <div>
            <div className="font-display font-bold text-[38px]">3+</div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase mt-0.5">
              Ani Motorsport
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[38px]">100%</div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase mt-0.5">
              Verificat pe Dyno
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-[38px]">1:1</div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase mt-0.5">
              Build-uri Spec
            </div>
          </div>
        </div>
      </div>

      <div
        className="aspect-[1.18] border border-white/10 relative bg-[#0e0e10] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <span className="absolute top-[18px] left-5 w-[30px] h-[30px] border-t border-l border-white/35" />
        <span className="absolute top-[18px] right-5 w-[30px] h-[30px] border-t border-r border-white/35" />
        <span className="absolute bottom-[18px] left-5 w-[30px] h-[30px] border-b border-l border-white/35" />
        <span className="absolute bottom-[18px] right-5 w-[30px] h-[30px] border-b border-r border-white/35" />
      </div>
    </section>
  );
};

export default Hero;
