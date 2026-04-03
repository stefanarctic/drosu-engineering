import { useEffect, useState } from "react";
import { ArrowLeft, Wrench, Gauge, Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="În Curând - DROSU Engineering"
        description="Această pagină este în lucru. Revino în curând pentru noutăți de la DROSU Engineering."
      />
      <Header />

      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(0 84% 58% / 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Floating icons */}
        <Wrench
          className={`absolute top-[18%] left-[12%] text-performance-red/20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          size={48}
          style={{ animationDelay: "200ms" }}
        />
        <Gauge
          className={`absolute top-[22%] right-[14%] text-performance-orange/20 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          size={40}
        />
        <Cog
          className={`absolute bottom-[20%] left-[18%] text-steel-gray/30 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          size={36}
        />
        <Cog
          className={`absolute bottom-[28%] right-[10%] text-performance-red/15 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          size={52}
        />

        <div
          className={`relative z-10 text-center px-6 max-w-2xl mx-auto transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium tracking-wider uppercase rounded-full bg-performance-red/10 text-performance-red border border-performance-red/20">
            În Dezvoltare
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-chrome-white mb-6 leading-tight">
            În{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--performance-red))] to-[hsl(var(--performance-orange))] bg-clip-text text-transparent">
              Curând
            </span>
          </h1>

          {/* Separator line */}
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-primary" />

          {/* Description */}
          <p className="text-lg md:text-xl text-steel-gray leading-relaxed mb-10 max-w-lg mx-auto">
            Lucrăm intens la această pagină. Revino în curând pentru conținut
            nou și actualizări de la DROSU Engineering.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="performance"
              size="lg"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft size={18} />
              Înapoi Acasă
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-carbon-gray text-chrome-white hover:border-performance-red hover:text-performance-red"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#contact";
                } else {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactează-ne
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
