function SearchBar({ busqueda, handleBusqueda, onClearSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔎 Buscar anime o videojuego..."
        value={busqueda}
        onChange={handleBusqueda}
        className="search-input"
      />
      {busqueda && (
        <button type="button" className="clear-button" onClick={onClearSearch}>
          Limpiar
        </button>
      )}
    </div>
  );
}

export default SearchBar;
