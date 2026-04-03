import { useEffect, useState, useRef } from "react";
import { Wrench, Gauge, Cog, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const ComingSoon = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="coming-soon"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(0 84% 58% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating decorative icons */}
      <Wrench
        className={`absolute top-16 left-[10%] text-performance-red/15 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        size={44}
      />
      <Gauge
        className={`absolute top-20 right-[12%] text-performance-orange/15 transition-all duration-1000 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        size={36}
      />
      <Cog
        className={`absolute bottom-16 left-[15%] text-steel-gray/20 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        size={32}
      />
      <Cog
        className={`absolute bottom-24 right-[8%] text-performance-red/10 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        size={48}
      />

      <div
        className={`relative z-10 text-center px-6 max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium tracking-wider uppercase rounded-full bg-performance-red/10 text-performance-red border border-performance-red/20">
          În Dezvoltare
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chrome-white mb-6 leading-tight">
          În{" "}
          <span className="bg-gradient-to-r from-[hsl(var(--performance-red))] to-[hsl(var(--performance-orange))] bg-clip-text text-transparent">
            Curând
          </span>
        </h2>

        {/* Separator */}
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-primary" />

        {/* Description */}
        <p className="text-lg md:text-xl text-steel-gray leading-relaxed max-w-lg mx-auto mb-10">
          Lucrăm intens la conținut nou. Revino în curând pentru actualizări de
          la DROSU Engineering.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="performance"
            size="lg"
            className="gap-2"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contactează-ne
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-carbon-gray text-chrome-white hover:border-red-500 hover:text-red-500"
            asChild
          >
            <a
              href="https://www.youtube.com/@DrosuEngineering"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={20} />
              YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
