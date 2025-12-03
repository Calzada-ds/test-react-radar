import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import { useProductById } from '../hooks/useProductById'; 
import { Loader } from '../components/Loader';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error } = useProductById(id);

  if (loading) return <Loader />;

  if (error) return (
    <div className="container fade-in error-page-layout">
      <Link to="/" className="back-link">← Volver al inicio</Link>
      <div className="error-container">
        <h2 className="error-title">Producto no encontrado</h2>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="container fade-in detail-page">
      <Link to="/" className="back-link">← Volver al catálogo</Link>
      <div className="detail-grid">
        <div className="detail-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="detail-img-responsive"
          />
        </div>

        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-price-row">
            <span className="price-large">
              ${product.price}
            </span>
          </div>

          <button
            className="btn btn-wide"
            onClick={() => addToCart(product)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};