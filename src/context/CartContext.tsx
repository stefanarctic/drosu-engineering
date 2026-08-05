import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { formatMoney, type Product } from "@/data/products";

export interface CartItem {
  id: string;
  name: string;
  priceNum: number;
  img: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  cartOpen: boolean;
  detailKey: string | null;
  goalsPrefill: string;
  cartCount: number;
  subtotal: number;
  addItem: (product: Pick<Product, "id" | "name" | "priceNum" | "img">) => void;
  changeQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  openDetail: (key: string) => void;
  closeDetail: () => void;
  checkout: () => void;
  clearGoalsPrefill: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [goalsPrefill, setGoalsPrefill] = useState("");

  const addItem = useCallback(
    (product: Pick<Product, "id" | "name" | "priceNum" | "img">) => {
      setItems((prev) => {
        const i = prev.findIndex((x) => x.id === product.id);
        if (i >= 0) {
          const next = prev.slice();
          next[i] = { ...next[i], qty: next[i].qty + 1 };
          return next;
        }
        return [...prev, { ...product, qty: 1 }];
      });
      setCartOpen(true);
    },
    []
  );

  const changeQty = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty + delta } : x))
        .filter((x) => x.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const checkout = useCallback(() => {
    setItems((current) => {
      const lines = current.map(
        (it) =>
          `• ${it.qty}× ${it.name} — ${formatMoney(it.priceNum * it.qty)}`
      );
      const total = current.reduce((a, b) => a + b.priceNum * b.qty, 0);
      const note = [
        "Cerere comandă piese:",
        ...lines,
        `Subtotal: ${formatMoney(total)}`,
        "",
        "Vehicul / note montaj:",
      ].join("\n");
      setGoalsPrefill(note);
      return current;
    });
    setCartOpen(false);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 70,
          behavior: "smooth",
        });
      }
    }, 60);
  }, []);

  const cartCount = useMemo(
    () => items.reduce((a, b) => a + b.qty, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((a, b) => a + b.priceNum * b.qty, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      cartOpen,
      detailKey,
      goalsPrefill,
      cartCount,
      subtotal,
      addItem,
      changeQty,
      removeItem,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      openDetail: (key: string) => setDetailKey(key),
      closeDetail: () => setDetailKey(null),
      checkout,
      clearGoalsPrefill: () => setGoalsPrefill(""),
      clearCart: () => setItems([]),
    }),
    [
      items,
      cartOpen,
      detailKey,
      goalsPrefill,
      cartCount,
      subtotal,
      addItem,
      changeQty,
      removeItem,
      checkout,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
