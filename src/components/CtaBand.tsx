const CtaBand = () => {
  return (
    <section id="cta" className="max-w-[1280px] mx-auto px-5 md:px-10 pb-20 md:pb-[110px]">
      <div className="relative overflow-hidden border border-white/10 bg-demo-surface px-6 py-16 md:px-10 md:py-[84px] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-demo-accent" />
        <h2 className="font-display font-bold text-[40px] md:text-[56px] uppercase leading-none">
          Gata să-ți upgradezi mașina?
        </h2>
        <p className="max-w-[520px] mx-auto mt-[22px] text-lg leading-[1.6] text-demo-muted">
          Spune-ne platforma și obiectivele. Trasăm drumul de la baseline la
          build final — sau te ajutăm să alegi piesele potrivite din shop.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-10">
          <a
            href="#contact"
            className="btn-fill bg-white text-demo-bg font-semibold text-[15px] px-8 py-[15px]"
          >
            Contactează-ne
          </a>
          <a
            href="#services"
            className="btn-out border border-white/30 text-white font-semibold text-[15px] px-8 py-[15px]"
          >
            Vezi serviciile
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
