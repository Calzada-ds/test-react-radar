import { useState } from 'react';
import { CartContext } from '../hooks/CartContext';
import { useMemo } from 'react';


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };
  
  const getProductTitle = (id) => {
      const item = cart.find(p => p.id === id);
      return item ? item.title.substring(0, 20) : 'Producto';
  };

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`¡${product.title.substring(0, 20)}... añadido!`);
  };

  const decreaseQuantity = (id) => {
    const title = getProductTitle(id);
    
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity - 1) };
      }
      return item;
    }));
    
    showNotification(`${title}... cantidad reducida.`); 
  };

  const removeFromCart = (id) => {
    const title = getProductTitle(id);
    
    setCart(prev => prev.filter(item => item.id !== id));
    
    showNotification(`${title}... eliminado del carrito`); 
  };

const total = useMemo(() => 
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
[cart]);

const count = useMemo(() => 
  cart.reduce((acc, item) => acc + item.quantity, 0),
[cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, total, count, notification }}>
      {children}
    </CartContext.Provider>
  );
};