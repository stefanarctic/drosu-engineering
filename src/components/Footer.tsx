import logo from "@/assets/demo/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-demo-deep">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt="Drosu Engineering"
            className="h-8 w-auto mb-[22px]"
          />
          <p className="text-sm leading-relaxed text-demo-dim max-w-[280px]">
            Modificări de performanță pentru stradă și proiecte de curse
            personalizate. Strada Bujorului 5, Râmnicu Vâlcea, România.
          </p>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-demo-dim uppercase mb-4">
            Navigare
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-demo-muted">
            <a href="/#capabilities" className="foot-link">
              Despre
            </a>
            <a href="/#services" className="foot-link">
              Servicii
            </a>
            <a href="/#shop" className="foot-link">
              Shop
            </a>
            <a href="/#blog" className="foot-link">
              Blog
            </a>
            <a href="/#contact" className="foot-link">
              Contact
            </a>
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-demo-dim uppercase mb-4">
            Contact
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-demo-muted">
            <a
              href="mailto:drosucristian10@gmail.com"
              className="foot-link"
            >
              drosucristian10@gmail.com
            </a>
            <a href="#contact" className="foot-link">
              Solicită o ofertă
            </a>
            <a
              href="https://www.youtube.com/@DRS_engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-link"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:justify-between text-[12px] text-demo-dim font-mono tracking-wide">
        <span>© 2026 Drosu Engineering. Toate drepturile rezervate.</span>
        <span>Performanță · Fabricație · Tuning</span>
      </div>
    </footer>
  );
};

export default Footer;
