export default function ProductCard({ product, onOpen }) {
  return (
    <button
      onClick={() => onOpen(product)}
      className="ocean-card text-left hover:bg-raised/90 transition-colors overflow-hidden"
    >
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h3 className="text-heading font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.summary}</p>
      </div>
    </button>
  );
}
