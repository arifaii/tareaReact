import { useState } from "react";
import type { ItemCatalogo } from "../types/catalogo";

function ItemCard({
  titulo,
  categoria,
  anio,
  destacado,
  imagen,
}: ItemCatalogo) {
  const [favorito, setFavorito] = useState<boolean>(false);

  const handleFavorito: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFavorito(!favorito);
  };

  return (
    <div
      className={`card ${destacado ? "destacado" : ""} ${favorito ? "favorito" : ""}`}
    >
      <img className="card-img" src={imagen} alt={titulo} />

      <div className="card-body">
        {destacado && <span className="badge-destacado">⭐ Destacado</span>}
        {favorito && <span className="badge-favorito">❤️ Favorito</span>}

        <h3>{titulo}</h3>
        <p>{categoria}</p>
        <p>{anio}</p>

        <button className="fav-btn" onClick={handleFavorito}>
          {favorito ? "⭐ Favorito" : "☆ Marcar favorito"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
