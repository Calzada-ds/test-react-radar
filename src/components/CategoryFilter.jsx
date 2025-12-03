
export const CategoryFilter = ({ setFilter, activeFilter }) => {
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
    <div className="filters-wrapper fade-in">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`category-btn ${activeFilter === cat ? 'active' : ''}`} 
        >
          {cat}
        </button>
      ))}
    </div>
  );
};