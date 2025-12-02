import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="toast-notification">
      {notification}
    </div>
  );
};