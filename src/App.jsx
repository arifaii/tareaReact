import { useState } from "react"
import CustomHeader from "./components/CustomHeader"
import CardGrid from "./components/CardGrid"
import CustomFooter from "./components/CustomFooter"
import "./App.css"
import { catalogo } from "./data"
import SearchBar from "./components/SearchBar"
function App() {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const itemsFiltrados = catalogo.filter((item) =>
    item.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  )
  return (
    <>
      <CustomHeader />
      <SearchBar 
      busqueda={busqueda} 
      handleBusqueda={handleBusqueda} 
      />

      <main>
        <CardGrid  items={itemsFiltrados} />
      </main>
      <CustomFooter />
    </>
  )
}

export default App
