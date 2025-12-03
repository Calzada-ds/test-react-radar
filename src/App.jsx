import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { CartProvider } from './context/CartProvider'; 
import { Toast } from './components/Toast';

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail key={location.pathname} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toast />
    </CartProvider>
  );
}

export default App;
