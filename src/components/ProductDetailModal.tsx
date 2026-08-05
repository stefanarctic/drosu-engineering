import { PRODUCTS, formatMoney } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetailModal = () => {
  const { detailKey, closeDetail, addItem } = useCart();
  const detail = PRODUCTS.find((p) => p.id === detailKey) || null;

  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={closeDetail}
    >
      <div
        className="animate-popin w-full max-w-[920px] max-h-[90vh] overflow-y-auto bg-demo-surface border border-white/10 grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-square md:aspect-auto md:min-h-[420px] bg-[#0e0e10]">
          <div
            className="w-full h-full min-h-[280px] bg-cover bg-center"
            style={{ backgroundImage: `url(${detail.img})` }}
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[11px] tracking-[0.16em] text-demo-accent uppercase">
              {detail.cat}
            </span>
            <button
              type="button"
              onClick={closeDetail}
              className="text-[#5A5A60] hover:text-white text-lg leading-none"
              aria-label="Închide"
            >
              ✕
            </button>
          </div>
          <h3 className="font-display font-bold text-[32px] uppercase mt-3 leading-tight">
            {detail.name}
          </h3>
          <p className="text-[14.5px] leading-relaxed text-demo-muted mt-4">
            {detail.long}
          </p>
          <div className="flex flex-col gap-[11px] mt-6">
            {detail.specs.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 text-[14px] text-[#D6D6D8]"
              >
                <span className="w-1.5 h-1.5 bg-demo-accent shrink-0" />
                {s}
              </div>
            ))}
          </div>
          <div className="flex-1" />
          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            <span className="font-display font-bold text-[30px]">
              {formatMoney(detail.priceNum)}
            </span>
            <button
              type="button"
              className="add-btn border border-white/20 text-white text-[14px] font-semibold px-5 py-3"
              onClick={() => {
                addItem(detail);
                closeDetail();
              }}
            >
              Adaugă în coș
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
