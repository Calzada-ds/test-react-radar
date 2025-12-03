import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products', { signal });

        if (!res.ok) throw new Error('Error al cargar productos');

        const data = await res.json();
                
        setProducts(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Petición de productos cancelada');
          return;
        }
        setError(err.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
};