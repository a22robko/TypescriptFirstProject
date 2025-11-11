import type { Product } from "../data/products";

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (id: number) => void;
}) {
  return (
    <article className="card">
      <div className="cardBody">
        <h3 className="cardTitle">{product.name}</h3>
        <p className="muted">{product.description}</p>
      </div>

      <div className="cardFooter">
        <span className="price">{product.price} €</span>
        <button className="btn primary" onClick={() => onAdd(product.id)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
