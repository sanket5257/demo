export default function ProductCard({ product, onOpen }) {
  return (
    <button
      onClick={() => onOpen(product)}
      className="ocean-card text-left hover:bg-raised/90 transition-colors overflow-hidden group"
    >
      {/* Image Wrapper with Aspect Ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-heading font-semibold text-lg">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.summary}</p>
      </div>
    </button>
  );
}
