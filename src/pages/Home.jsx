import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { Loader } from '../components/Loader';

export const Home = () => {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    return filter === 'all'
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );
  }, [filter, products]);

  if (loading) return <Loader />;

  if (error) return (
    <main className="container fade-in">
      <div className="error-container">
        <h2 className="error-title">¡Ups! Algo salió mal</h2>
        <p>{error}</p>
        <p className="error-subtext">Por favor revisa tu conexión o intenta más tarde.</p>
        <button
          className="btn btn-reload"
          onClick={() => window.location.reload()}
        >
          Recargar Página
        </button>
      </div>
    </main>
  );

  return (
    <main className="home-page">

      <header className="hero-section fade-in">
        <div className="hero-content">
          <h1 className="hero-title">E-commerce</h1>
          <p className="hero-subtitle">
            Descubre nuestra selección exclusiva de productos minimalistas diseñados para tu estilo de vida.
          </p>
        </div>
      </header>

      <div className="container">

        <section className="catalog-section fade-in">
          
          <div className="filters-area">
            <CategoryFilter 
              setFilter={setFilter} 
              activeFilter={filter} 
            />
          </div>

          <div className="products-area">

            <header className="products-header">
              <p className="results-count">
                Mostrando {filteredProducts.length} productos
              </p>
            </header>

            <div className="grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="empty-category-message">
                No se encontraron productos en esta categoría.
              </div>
            )}

          </div>

        </section>

      </div>
    </main>
  );
};
