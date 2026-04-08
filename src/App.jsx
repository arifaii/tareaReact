import { useEffect, useMemo, useState } from "react";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import CustomFooter from "./components/CustomFooter";
import "./App.css";
import { catalogo } from "./data";
import SearchBar from "./components/SearchBar";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [orden, setOrden] = useState("tituloAsc");
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = window.localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const categorias = useMemo(() => {
    const opciones = Array.from(
      new Set(catalogo.map((item) => item.categoria)),
    );
    return ["Todas", ...opciones.sort((a, b) => a.localeCompare(b))];
  }, []);

  const ordenesTexto = {
    tituloAsc: "Título A → Z",
    tituloDesc: "Título Z → A",
    anioAsc: "Año ascendente",
    anioDesc: "Año descendente",
  };

  const itemsFiltrados = useMemo(() => {
    const busquedaNormalizada = busqueda.toLocaleLowerCase();

    return catalogo
      .filter((item) => {
        const coincideBusqueda = item.titulo
          .toLocaleLowerCase()
          .includes(busquedaNormalizada);
        const coincideCategoria =
          categoriaSeleccionada === "Todas" ||
          item.categoria === categoriaSeleccionada;
        const coincideFavoritos =
          !mostrarSoloFavoritos || favoritos.includes(item.id);
        return coincideBusqueda && coincideCategoria && coincideFavoritos;
      })
      .sort((a, b) => {
        if (orden === "anioDesc") return b.anio - a.anio;
        if (orden === "anioAsc") return a.anio - b.anio;
        if (orden === "tituloDesc") return b.titulo.localeCompare(a.titulo);
        return a.titulo.localeCompare(b.titulo);
      });
  }, [busqueda, categoriaSeleccionada, orden, mostrarSoloFavoritos, favoritos]);

  const handleBusqueda = (e) => setBusqueda(e.target.value);
  const handleClearSearch = () => setBusqueda("");

  const handleToggleFavorito = (itemId) => {
    setFavoritos((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const handleResetFilters = () => {
    setBusqueda("");
    setCategoriaSeleccionada("Todas");
    setOrden("tituloAsc");
    setMostrarSoloFavoritos(false);
  };

  return (
    <>
      <CustomHeader />

      <main className="app-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Catálogo Premium</p>
            <h2>Explora videojuegos y anime con filtros inteligentes.</h2>
            <p className="hero-description">
              Usa la búsqueda, ordena por año o título, y guarda tus favoritos
              para volver a ellos más tarde.
            </p>
            <div className="hero-stats">
              <span>{catalogo.length} items en catálogo</span>
              <span>{favoritos.length} favoritos guardados</span>
            </div>
          </div>
        </section>

        <section className="filters-panel">
          <SearchBar
            busqueda={busqueda}
            handleBusqueda={handleBusqueda}
            onClearSearch={handleClearSearch}
          />

          <div className="filter-controls">
            <div className="filter-summary">
              Selección actual: <strong>{categoriaSeleccionada}</strong> ·{" "}
              <strong>{ordenesTexto[orden]}</strong>
              {mostrarSoloFavoritos && " · Solo favoritos"}
            </div>

            <label>
              Categoría
              <select
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                {categorias.map((categoria) => (
                  <option value={categoria} key={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Ordenar
              <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="tituloAsc">Título A → Z</option>
                <option value="tituloDesc">Título Z → A</option>
                <option value="anioAsc">Año ascendente</option>
                <option value="anioDesc">Año descendente</option>
              </select>
            </label>

            <button
              type="button"
              className={
                mostrarSoloFavoritos ? "toggle-button active" : "toggle-button"
              }
              onClick={() => setMostrarSoloFavoritos((value) => !value)}
            >
              {mostrarSoloFavoritos ? "Ver todo" : "Solo favoritos"}
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleResetFilters}
            >
              Reset filtros
            </button>
          </div>
        </section>

        <section className="results-bar">
          <p>
            Mostrando <strong>{itemsFiltrados.length}</strong> resultados
            {mostrarSoloFavoritos && " de favoritos"}.
          </p>
        </section>

        <CardGrid
          items={itemsFiltrados}
          favoritos={favoritos}
          onToggleFavorito={handleToggleFavorito}
        />

        {itemsFiltrados.length === 0 && (
          <div className="empty-state">
            <h3>No se encontraron resultados</h3>
            <p>
              Prueba con otra palabra clave, categoría diferente o desactiva el
              filtro de favoritos.
            </p>
          </div>
        )}
      </main>

      <CustomFooter />
    </>
  );
}

export default App;
