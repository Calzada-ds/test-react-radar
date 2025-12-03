import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="card-image-container">
          <img className="card-image" src={product.image} alt={product.title} />
        </div>
        
        <h3 className="card-title" title={product.title}>
          {product.title}
        </h3>
        <p className="card-price">${product.price}</p>
      </Link>
      
      <button className="btn" onClick={() => addToCart(product)}>
        Añadir al Carrito
      </button>
    </div>
  );
};