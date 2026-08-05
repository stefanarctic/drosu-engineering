import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/demo/logo.png";

const navItems = [
  { name: "Acasă", href: "#home" },
  { name: "Despre", href: "#capabilities" },
  { name: "Servicii", href: "#services" },
  { name: "Shop", href: "#shop" },
  { name: "Video", href: "#videos" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { cartCount, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const links = navItems.map((n) => n.href.replace("#", ""));
    let raf = 0;

    const spy = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const line = 150;
        let next: string | null = null;
        let bestTop = -Infinity;
        for (const id of links) {
          const el = document.getElementById(id);
          if (!el) continue;
          const t = el.getBoundingClientRect().top;
          if (t <= line && t > bestTop) {
            bestTop = t;
            next = id;
          }
        }
        if (next) setActiveId(next);
      });
    };

    window.addEventListener("scroll", spy, true);
    window.addEventListener("resize", spy);
    spy();
    return () => {
      window.removeEventListener("scroll", spy, true);
      window.removeEventListener("resize", spy);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [onHome]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    if (!onHome) {
      navigate(`/${href}`);
      setIsMenuOpen(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-demo-bg/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 h-[70px] flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex items-center"
        >
          <img src={logo} alt="Drosu Engineering" className="h-[34px] w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-9 text-[15px] tracking-[0.01em]">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${active ? "text-white font-medium" : "text-demo-muted"}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
              >
                {item.name}
              </a>
            );
          })}
          <button
            type="button"
            onClick={openCart}
            className="nav-link text-demo-muted flex items-center gap-[7px] cursor-pointer"
          >
            Coș
            <span className="min-w-[22px] h-[22px] px-1.5 rounded-full bg-demo-accent text-white text-[11px] font-semibold flex items-center justify-center">
              {cartCount}
            </span>
          </button>
          <a
            href="#contact"
            className="btn-fill bg-white text-demo-bg font-semibold text-[14px] px-5 py-2.5"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            Contact
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            className="text-demo-muted text-sm flex items-center gap-1.5"
          >
            Coș
            <span className="min-w-[20px] h-[20px] px-1 rounded-full bg-demo-accent text-white text-[10px] font-semibold flex items-center justify-center">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-demo-bg px-5 pb-5">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-demo-muted hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-fill bg-white text-demo-bg font-semibold text-[14px] px-5 py-3 text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
