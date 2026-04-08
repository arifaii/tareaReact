import ItemCard from "./ItemCard"
function CardGrid({ items }) {
    const cards = items.map((item) =>(
        <ItemCard
        key={item.id}
        titulo={item.titulo}
        categoria={item.categoria}
        anio={item.anio}
        destacado={item.destacado}
        imagen={item.imagen}
        />
    ))

  return (
    <section>
        {cards}
    </section>
  )
}

export default CardGrid
