import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Loader } from '../components/Loader';

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error('No pudimos encontrar este producto.');
        }

        const data = await res.json();

        if (!data) {
          throw new Error('Producto vacío');
        }

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
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