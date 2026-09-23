export default function FilterBar({ categories, activeCategory, onCategory, search, onSearch, onAddClick }) {
  return (
    <div className="filter-bar">
      <div className="filter-chips">
        <button
          type="button"
          className={`chip-filter ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => onCategory('All')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`chip-filter ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-actions">
        <input
          type="search"
          placeholder="Search exercises…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Search exercises"
        />
        <button type="button" className="add-btn" onClick={onAddClick}>
          + Add exercise
        </button>
      </div>
    </div>
  )
}
