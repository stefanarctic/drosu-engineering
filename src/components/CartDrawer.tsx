import { formatMoney } from "@/data/products";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const {
    items,
    cartOpen,
    closeCart,
    changeQty,
    removeItem,
    checkout,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        className="fixed inset-0 z-[99] bg-black/62 backdrop-blur-[2px] transition-opacity duration-250"
        style={{
          opacity: cartOpen ? 1 : 0,
          pointerEvents: cartOpen ? "auto" : "none",
        }}
        onClick={closeCart}
      />
      <aside
        className="fixed top-0 right-0 bottom-0 z-[100] w-[430px] max-w-[92vw] bg-[#0d0d0f] border-l border-white/10 flex flex-col shadow-[-30px_0_60px_rgba(0,0,0,0.5)]"
        style={{
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/10">
          <div className="font-display font-semibold text-xl uppercase">
            Coșul tău
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-[#5A5A60] hover:text-white text-lg"
            aria-label="Închide coșul"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 px-7 text-center">
            <div className="text-demo-muted text-[15px]">Coșul este gol</div>
            <a
              href="#shop"
              onClick={closeCart}
              className="btn-fill bg-white text-demo-bg font-semibold text-sm px-[26px] py-[13px]"
            >
              Vezi piesele
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex gap-4 px-7 py-5 border-b border-white/10"
                >
                  <div
                    className="w-[70px] h-[54px] shrink-0 border border-white/10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${it.img})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-[16px] uppercase truncate">
                      {it.name}
                    </div>
                    <div className="font-mono text-xs text-demo-dim mt-1">
                      {formatMoney(it.priceNum)} buc
                    </div>
                    <div className="flex items-center gap-3.5 mt-3.5">
                      <div className="flex items-center border border-white/20">
                        <button
                          type="button"
                          onClick={() => changeQty(it.id, -1)}
                          className="w-8 h-8 text-demo-muted hover:text-white"
                        >
                          −
                        </button>
                        <div className="w-8 text-center text-sm">{it.qty}</div>
                        <button
                          type="button"
                          onClick={() => changeQty(it.id, 1)}
                          className="w-8 h-8 text-demo-muted hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <span className="ml-auto font-display font-semibold text-lg">
                        {formatMoney(it.priceNum * it.qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(it.id)}
                    className="text-[#5A5A60] hover:text-white text-[15px] self-start p-0.5"
                    aria-label="Elimină"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="px-7 py-6 border-t border-white/10 shrink-0">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[12px] tracking-[0.14em] text-demo-dim uppercase">
                  Subtotal
                </span>
                <span className="font-display font-bold text-[30px]">
                  {formatMoney(subtotal)}
                </span>
              </div>
              <button
                type="button"
                onClick={checkout}
                className="btn-fill w-full bg-white text-demo-bg font-semibold text-[15px] py-4"
              >
                Finalizează
              </button>
              <div className="text-center font-mono text-[11px] tracking-wide text-demo-dim mt-3">
                Trimite comanda în formularul de contact
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
