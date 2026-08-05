import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import { trackConversion, trackEvent } from "./Analytics";

const fieldClass =
  "fld w-full bg-demo-bg border border-white/[0.14] text-white px-[15px] py-[13px] text-[15px] font-sans outline-none";

const Contact = () => {
  const { goalsPrefill, clearGoalsPrefill, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [goals, setGoals] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
  });

  useEffect(() => {
    if (goalsPrefill) {
      setGoals(goalsPrefill);
      setSubmitted(false);
    }
  }, [goalsPrefill]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    trackEvent("form_start", {
      form_name: "contact_form",
      form_location: "contact_section",
    });
    await new Promise((r) => setTimeout(r, 800));
    trackEvent("form_submit", {
      form_name: "contact_form",
      form_location: "contact_section",
    });
    trackConversion("contact_form_submission");
    console.log("Form submitted:", { ...form, goals });
    setSubmitted(true);
    clearCart();
    clearGoalsPrefill();
    setForm({ name: "", email: "", phone: "", vehicle: "" });
    setGoals("");
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[0.08] bg-demo-deep"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
        <div>
          <div className="font-mono text-[12px] tracking-[0.3em] text-demo-accent uppercase mb-[18px]">
            Contact
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[52px] uppercase leading-none">
            Începe build-ul
          </h2>
          <p className="mt-5 max-w-[400px] text-[17px] leading-[1.6] text-demo-muted">
            Trimite platforma și obiectivele — sau finalizează coșul de piese
            aici. Răspundem cu un plan de baseline și o consultație gratuită,
            de obicei în maxim o zi lucrătoare.
          </p>
          <div className="mt-11 flex flex-col gap-[26px]">
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] text-[#5A5A60] uppercase mb-[7px]">
                Telefon
              </div>
              <a
                href="tel:+40726960376"
                className="foot-link text-[17px] text-white"
                onClick={() => {
                  trackEvent("phone_click", {
                    phone_number: "0726960376",
                    location: "contact_section",
                  });
                  trackConversion("phone_call");
                }}
              >
                +40 726 960 376
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] text-[#5A5A60] uppercase mb-[7px]">
                Email
              </div>
              <a
                href="mailto:drosucristian10@gmail.com"
                className="foot-link text-[17px] text-white"
              >
                drosucristian10@gmail.com
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] text-[#5A5A60] uppercase mb-[7px]">
                Adresă
              </div>
              <a
                href="https://www.google.com/maps/place/Strada+Bujorului+5,+R%C3%A2mnicu+V%C3%A2lcea/@45.1101748,24.3647575,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="foot-link text-[17px] text-white"
              >
                Strada Bujorului 5, Râmnicu Vâlcea
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] text-[#5A5A60] uppercase mb-[7px]">
                Program
              </div>
              <div className="text-[17px] text-[#D6D6D8]">
                Lun–Vin · 08:00–18:00
              </div>
            </div>
          </div>
        </div>

        <div className="relative border border-white/10 bg-demo-surface px-6 py-10 md:px-10 md:py-11">
          <div className="absolute top-0 left-0 w-20 h-1 bg-demo-accent" />
          {submitted ? (
            <div className="min-h-[420px] flex flex-col items-center justify-center text-center gap-4 animate-popin">
              <div className="w-14 h-14 rounded-full border-2 border-demo-accent text-demo-accent flex items-center justify-center text-[26px]">
                ✓
              </div>
              <div className="font-display font-semibold text-[28px] uppercase">
                Mesaj trimis
              </div>
              <p className="text-[15px] text-demo-muted max-w-[300px]">
                Mulțumim — am primit detaliile și revenim în curând.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
                <div>
                  <label className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase block mb-[9px]">
                    Nume
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Numele tău"
                    className={fieldClass}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase block mb-[9px]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="tu@email.com"
                    className={fieldClass}
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
                <div>
                  <label className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase block mb-[9px]">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+40 712 345 678"
                    className={fieldClass}
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase block mb-[9px]">
                    Vehicul / Platformă
                  </label>
                  <input
                    type="text"
                    placeholder="ex. BMW E46 M3"
                    className={fieldClass}
                    value={form.vehicle}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, vehicle: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-[0.14em] text-demo-dim uppercase block mb-[9px]">
                  Obiective / comandă
                </label>
                <textarea
                  rows={5}
                  placeholder="Țintă de putere, stradă sau circuit, termen, buget… sau adaugă piese în coș și apasă Finalizează ca să le aduci aici."
                  className={`${fieldClass} resize-y`}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn-fill self-start bg-demo-accent text-white font-semibold text-[15px] px-8 py-[15px] border-0 cursor-pointer"
              >
                Trimite mesajul
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
