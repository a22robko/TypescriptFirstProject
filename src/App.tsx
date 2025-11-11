import { useState } from "react";
import CartView from "./components/CartView";
import ProductCard from "./components/ProductCard";
import Checkout from "./pages/checkout";
import { PRODUCTS, type Product } from "./data/products";
import "./App.css";

type Cart = Record<number, number>;
type Page = "shop" | "checkout";

export default function App() {
  const [cart, setCart] = useState<Cart>({});
  const [page, setPage] = useState<Page>("shop");

  const add = (id: number) =>
    setCart(c => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

  const remove = (id: number) =>
    setCart(c => {
      const qty = (c[id] ?? 0) - 1;
      const next = { ...c };
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });

  const clear = () => setCart({});

  if (page === "checkout") {
    return (
      <Checkout
        cart={cart}
        products={PRODUCTS}
        clear={clear}
        goBack={() => setPage("shop")}
      />
    );
  }

  // Shop page
  return (
    <div className="page">
      <header className="header">
        <h1>Store</h1>
      </header>

      <section className="grid">
        {PRODUCTS.map((p: Product) => (
          <ProductCard key={p.id} product={p} onAdd={add} />
        ))}
      </section>

      <section className="cartSection">
        <CartView
          cart={cart}
          products={PRODUCTS}
          add={add}
          remove={remove}
          clear={clear}
        />
        {Object.keys(cart).length > 0 && (
          <div
            style={{
              marginTop: 12,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="btn primary"
              onClick={() => setPage("checkout")}
            >
              Go to checkout
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
