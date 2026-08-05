import { useMemo, useState } from "react";
import {
  PRODUCTS,
  PRODUCT_FILTERS,
  formatMoney,
  type ProductFilter,
} from "@/data/products";
import { useCart } from "@/context/CartContext";

const Shop = () => {
  const [filter, setFilter] = useState<ProductFilter>("Toate");
  const { openDetail, addItem } = useCart();

  const shown = useMemo(
    () =>
      PRODUCTS.filter((p) => filter === "Toate" || p.cat === filter),
    [filter]
  );

  return (
    <section id="shop" className="border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 md:py-[110px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="font-mono text-[12px] tracking-[0.28em] text-demo-accent uppercase mb-4">
              Shop piese
            </div>
            <h2 className="font-display font-bold text-[36px] md:text-[52px] uppercase leading-[1.05]">
              Hardware de performanță
            </h2>
            <p className="max-w-[520px] mt-[18px] text-[17px] leading-relaxed text-demo-muted">
              Piese selectate pe care le montăm și în care avem încredere.
              Fiecare comandă include ghidaj de fitment de la echipa de build.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {PRODUCT_FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={`shop-chip ${filter === label ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {shown.map((p) => (
            <div
              key={p.id}
              className="prod border border-white/10 bg-demo-surface flex flex-col overflow-hidden"
              onClick={() => openDetail(p.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openDetail(p.id);
              }}
            >
              <div className="aspect-[4/3] bg-[#0e0e10] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
              </div>
              <div className="p-[26px] flex flex-col flex-1">
                <div className="font-display font-semibold text-[22px] uppercase">
                  {p.name}
                </div>
                <p className="text-[13.5px] leading-relaxed text-demo-dim mt-2 flex-1">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between mt-[22px]">
                  <span className="font-display font-semibold text-2xl">
                    {formatMoney(p.priceNum)}
                  </span>
                  <button
                    type="button"
                    className="add-btn border border-white/20 text-white text-[13px] font-semibold px-4 py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(p);
                    }}
                  >
                    Adaugă în coș
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
