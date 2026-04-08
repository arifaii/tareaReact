function ItemCard({
  id,
  titulo,
  categoria,
  anio,
  destacado,
  imagen,
  isFavorito,
  onToggleFavorito,
}) {
  const claseCard = `card ${destacado ? "destacado" : ""} ${isFavorito ? "favorito" : ""}`;

  return (
    <article className={claseCard} aria-labelledby={`titulo-${id}`}>
      <div className="card-visual">
        <img src={imagen} alt={titulo} className="card-img" />
        <div className="card-labels">
          {destacado && (
            <span className="badge badge-destacado">Destacado</span>
          )}
          {isFavorito && <span className="badge badge-favorito">Favorito</span>}
        </div>
      </div>

      <div className="card-body">
        <h3 id={`titulo-${id}`}>{titulo}</h3>
        <p className="card-meta">{categoria}</p>
        <p className="card-meta">Año: {anio}</p>

        <button
          className="action-button"
          type="button"
          onClick={onToggleFavorito}
        >
          {isFavorito ? "★ Guardado" : "☆ Guardar favorito"}
        </button>
      </div>
    </article>
  );
}

export default ItemCard;
