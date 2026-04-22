import type { ItemCatalogo } from "../types/catalogo";
import ItemCard from "./ItemCard";

interface CardGridProps {
  items: ItemCatalogo[];
}

function CardGrid({ items }: CardGridProps) {
  return (
    <section className="grid-section">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </section>
  );
}

export default CardGrid;
