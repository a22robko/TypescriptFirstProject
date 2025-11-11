import { useMemo, useState } from "react";
import type { Product } from "../data/products";

export type Cart = Record<number, number>;

export default function Checkout({
  cart,
  products,
  clear,
  goBack,
}: {
  cart: Cart;
  products: Product[];
  clear: () => void;
  goBack: () => void;
}) {
  const items = useMemo(
    () =>
      Object.entries(cart).map(([id, qty]) => {
        const p = products.find(x => x.id === Number(id))!;
        return { ...p, qty };
      }),
    [cart, products]
  );

  const total = useMemo(
    () => items.reduce((s, i) => s + i.price * i.qty, 0),
    [items]
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
    city: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.address || !form.city || !form.zip)
      return alert("Please fill in all required fields.");
    alert(`Thank you, ${form.name}! Your order of ${total} € has been placed.`);
    clear();
    goBack();
  }

  return (
    <div className="page">
      <header className="header" style={{ marginBottom: 20 }}>
        <h1>Checkout</h1>
      </header>

      <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <form
          className="panel"
          onSubmit={submit}
          style={{ gap: 12, display: "grid" }}
        >
          <h2 className="panelTitle">Delivery details</h2>

          <label>
            Name
            <input
              className="input"
              value={form.name}
              onChange={onChange("name")}
              required
            />
          </label>

          <label>
            Email
            <input
              className="input"
              type="email"
              value={form.email}
              onChange={onChange("email")}
            />
          </label>

          <label>
            Address
            <input
              className="input"
              value={form.address}
              onChange={onChange("address")}
              required
            />
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: 12,
            }}
          >
            <label>
              ZIP code
              <input
                className="input"
                value={form.zip}
                onChange={onChange("zip")}
                required
              />
            </label>

            <label>
              City
              <input
                className="input"
                value={form.city}
                onChange={onChange("city")}
                required
              />
            </label>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <button type="button" className="btn" onClick={goBack}>
              Back
            </button>
            <button className="btn primary" type="submit">
              Place order
            </button>
          </div>
        </form>

        <aside className="panel">
          <h2 className="panelTitle">Order summary</h2>

          {items.length === 0 ? (
            <p className="muted">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cartList">
                {items.map(i => (
                  <li key={i.id} className="cartRow">
                    <span>
                      {i.name} <span className="qty">({i.qty} pcs)</span>
                    </span>
                    <strong className="rowPrice">{i.price * i.qty} €</strong>
                  </li>
                ))}
              </ul>

              <div className="totalRow">
                <span>Total</span>
                <strong>{total} €</strong>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
