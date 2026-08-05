const YT_URL = "https://www.youtube.com/@DRS_engineering";

const Videos = () => {
  return (
    <section
      id="videos"
      className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center"
    >
      <div>
        <div className="font-mono text-[12px] tracking-[0.3em] text-demo-dim uppercase mb-3.5">
          YouTube
        </div>
        <h2 className="font-display font-bold text-[40px] md:text-[52px] uppercase leading-none">
          De pe canal
        </h2>
        <p className="mt-[22px] max-w-[420px] text-[17px] leading-[1.6] text-demo-muted">
          Urmărește build-urile noastre — montaje în atelier, sesiuni pe dyno și
          conținut de circuit de la Drosu Engineering.
        </p>
        <a
          href={YT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill mt-[34px] inline-flex items-center gap-[11px] bg-white text-demo-bg font-semibold text-[15px] px-[26px] py-3.5"
        >
          <span className="bg-demo-accent w-6 h-[18px] rounded-[4px] inline-flex items-center justify-center text-white text-[10px]">
            ▶
          </span>
          Abonează-te pe YouTube
        </a>
      </div>

      <a
        href={YT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-[1.85] border border-white/10 bg-demo-surface flex flex-col items-center justify-center gap-[18px] group"
      >
        <div className="yt-btn w-[74px] h-[52px] bg-demo-accent rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
          <span className="text-white text-2xl ml-0.5">▶</span>
        </div>
        <div className="font-display font-semibold text-[22px] uppercase text-center px-4">
          Vizitează canalul nostru YouTube
        </div>
        <div className="font-mono text-[12px] tracking-[0.12em] text-demo-dim uppercase">
          Build-uri · montaje · circuit
        </div>
      </a>
    </section>
  );
};

export default Videos;
