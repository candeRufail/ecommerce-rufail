// es un agrupador de un set de componentes items
// incluir dentro de itemListContainer.js 
//implementa un mock que devuelva un conjunto de items
//RECIBE UNA PROP {ITEMS} Y MAPEA ESTOS ITEMS AL COMPONENTE <Item />
import Item from './item';

export default function ItemList({ productos }) {
  return (
    productos.map(prod => <Item key={prod.id} prod={prod} />)
  )
}

