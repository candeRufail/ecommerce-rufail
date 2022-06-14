// es un agrupador de un set de componentes items
// incluir dentro de itemListContainer.js 
//implementa un mock que devuelva un conjunto de items
//RECIBE UNA PROP {ITEMS} Y MAPEA ESTOS ITEMS AL COMPONENTE <Item />
import Item from './item';

export default function ItemList() {
    const productos = [
        {
          id: '0',
          nombre: 'silla',
          descripcion: 'material madera',
          stock: '5',
        },
        {
          id: '1',
          nombre: 'mesa',
          descripcion: 'material acero',
          stock: '9',
        },
        {
          id: '2',
          nombre: 'sillon',
          descripcion: 'material terciopelo',
          stock: '15',
        },
      ];
  const getFech = () => {
    return new Promise((resolve) => {
      resolve(productos);
    });
  };
  getFech().then((resp) => {
    setTimeout(() => {
      console.log(resp.map((product) => product.nombre));
    }, 5000);
  });
  
return (
    productos.map(prod =>  <Item key={prod.id} prod={prod} />)
)
}
