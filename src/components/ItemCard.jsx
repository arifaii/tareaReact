import React, { useState } from 'react';
function ItemCard({ titulo, categoria, anio, destacado, imagen }) {

  const [favorito, setFavorito] = useState(false);
  const handleFavorito = () => {
    setFavorito(!favorito);
  }

  const claseCard = `
  card
  ${destacado ? "destacado" : ""}
  ${favorito ? "favorito" : ""}
  `;

  return (
    <div className={claseCard}>
      <img src={imagen} alt={titulo} className="card-img" />
      <h3>{titulo}</h3>
      <p>Categoría: {categoria}</p>
      <p>Año: {anio}</p>
    
      <button onClick={handleFavorito}>
        {favorito ? "⭐ Favorito" : "☆ Agregar a Favoritos"}
      </button>
    </div>
  )
}

export default ItemCard
