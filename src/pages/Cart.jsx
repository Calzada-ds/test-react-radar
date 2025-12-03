import { useMemo } from 'react';
import { useCart } from '../hooks/CartContext';
import { Link } from 'react-router-dom';

const getCategoryClass = (category) =>
  category.toLowerCase().replace(/[\s']/g, '-');

export const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, total, count } = useCart();

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  return (
    <div className="container fade-in page-content">

      <div className="page-header">
        <div>
          <Link to="/" className="back-link">
            ← Seguir comprando
          </Link>
          <h1 className="page-title">Tu Carrito</h1>
        </div>

        {!isEmpty && (
          <span className="results-count">
            {count} productos
          </span>
        )}
      </div>

      {isEmpty ? (
        <div className="empty-state">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <h2 className="empty-state-title">Tu carrito está vacío</h2>
          <p className="empty-state-desc">
            Parece que aún no has añadido nada.
          </p>

          <Link to="/" className="btn">
            Empezar a comprar
          </Link>
        </div>
      ) : (

        <div className="cart-layout">

          <div className="cart-items-list">
            {cart.map((item) => (
              <div
                key={item.id}
                className="card cart-item"
                data-category={getCategoryClass(item.category)}
              >
                <div className="cart-item-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img-content"
                  />
                </div>

                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.title}</h4>

                  <div className="cart-item-actions">
                    <span className="cart-item-price">${item.price}</span>

                    <div className="quantity-control">
                      <button
                        className="qty-btn"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>

                      <span className="cart-qty-number">
                        {item.quantity}
                      </span>

                      <button
                        className="qty-btn add"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn-delete"
                  title="Eliminar producto"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="summary-card">
            <h3 className="summary-title">Resumen del Pedido</h3>

            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="summary-row">
              <span className="summary-label">Envío</span>
              <span className="text-success">Gratis</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-wide">
              Proceder al Pago
            </button>

            <p className="secure-payment-msg">
              Pago seguro garantizado
            </p>
          </div>

        </div>
      )}
    </div>
  );
};
