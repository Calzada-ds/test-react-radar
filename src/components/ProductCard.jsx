import { Link } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';

// Helper para convertir nombres de categorías en el valor del atributo (sin cambios)
const getCategoryClass = (category) => {
    return category.toLowerCase().replace(/[\s']/g, '-');
};

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Generamos el valor del atributo
  const categoryAttr = getCategoryClass(product.category); 

  return (
    // CAMBIO CRÍTICO: Usamos el atributo data-category en el div principal
    <div className="card fade-in" data-category={categoryAttr}> 
      <Link to={`/product/${product.id}`}>
        <div className="card-image-container">
          {/* ... Imagen ... */}
          <img 
            className="card-image" 
            src={product.image} 
            alt={product.title} 
          />
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