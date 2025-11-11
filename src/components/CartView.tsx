import type { Product } from "../data/products";

type Cart = Record<number, number>;

export default function CartView({
  cart,
  products,
  add,
  remove,
  clear,
}: {
  cart: Cart;
  products: Product[];
  add: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
}) {
  const entries = Object.entries(cart);
  const items = entries.map(([id, qty]) => {
    const product = products.find(p => p.id === Number(id))!;
    return { ...product, qty };
  });
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="panel">
      <h2 className="panelTitle">Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <ul className="cartList">
          {items.map(item => (
            <li key={item.id} className="cartRow">
              <span className="cartName">
                {item.name} <span className="qty">({item.qty} pcs)</span>
              </span>

              <div className="cartActions">
                <span className="rowPrice">{item.price * item.qty} €</span>
                <div className="qtyControls">
                  <button
                    className="iconBtn"
                    aria-label="Decrease"
                    onClick={() => remove(item.id)}
                  >
                    −
                  </button>
                  <button
                    className="iconBtn"
                    aria-label="Increase"
                    onClick={() => add(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="totalRow">
        <span>Total</span>
        <strong>{total} €</strong>
      </div>

      <button className="btn danger" onClick={clear}>
        Clear cart
      </button>
    </div>
  );
}
