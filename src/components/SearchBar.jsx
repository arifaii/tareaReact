function SearchBar({busqueda, handleBusqueda}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔎 Buscar anime o videojuego..."
        value={busqueda}
        onChange={handleBusqueda}
            className="search-input"
      />
    </div>
  )
}

export default SearchBar
