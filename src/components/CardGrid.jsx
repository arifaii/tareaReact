import ItemCard from "./ItemCard";

function CardGrid({ items, favoritos, onToggleFavorito }) {
  const cards = items.map((item) => (
    <ItemCard
      key={item.id}
      id={item.id}
      titulo={item.titulo}
      categoria={item.categoria}
      anio={item.anio}
      destacado={item.destacado}
      imagen={item.imagen}
      isFavorito={favoritos.includes(item.id)}
      onToggleFavorito={() => onToggleFavorito(item.id)}
    />
  ));

  return (
    <section className="grid-section" aria-label="Resultados del catálogo">
      {cards}
    </section>
  );
}

export default CardGrid;
