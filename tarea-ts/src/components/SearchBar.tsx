interface SearchBarProps {
  busqueda: string;
  handleBusqueda: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ busqueda, handleBusqueda }: SearchBarProps) {
  return (
    <input
      className="search-input"
      value={busqueda}
      onChange={handleBusqueda}
      placeholder="Buscar..."
    />
  );
}

export default SearchBar;
