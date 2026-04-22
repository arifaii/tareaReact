import { useState } from "react";
import "./App.css";

import { catalogo } from "./data";
import type { ItemCatalogo } from "./types/catalogo";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import SearchBar from "./components/SearchBar";
import CustomFooter from "./components/CustomFooter";

function App() {
  const [busqueda, setBusqueda] = useState<string>("");

  const handleBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const itemsFiltrados: ItemCatalogo[] = catalogo.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <>
      <CustomHeader />

      <main className="app-shell">
        <div className="hero-section">
          <SearchBar busqueda={busqueda} handleBusqueda={handleBusqueda} />
        </div>

        <CardGrid items={itemsFiltrados} />
      </main>

      <CustomFooter />
    </>
  );
}

export default App;
