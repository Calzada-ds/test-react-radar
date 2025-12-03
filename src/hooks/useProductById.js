import { useState, useEffect } from 'react';

export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, { signal });

        if (!res.ok) throw new Error('No pudimos encontrar este producto.');

        const data = await res.json();

        if (!data) throw new Error('Producto vacío');

        setProduct(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          return; 
        }
        setError(err.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchProduct();

    return () => controller.abort();

  }, [id]);

  return { product, loading, error };
};