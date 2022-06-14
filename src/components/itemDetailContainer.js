import ItemDetail from "./itemDetail";

export default function ItemDetailContainer() {
    const detalles = [
        {
          id: '0',
          nombre: 'silla',
          imagen: '/assets/silla-valenziana.jpg',
          descripcion: 'silla de madera cedro con tapizado',
          precio: '$5.000',
        },
        {
          id: '1',
          nombre: 'mesa',
          imagen: '/assets/mesa-de-madera.jpg',
          descripcion: 'mesa de roble con patas de madera cedro',
          precio: '$9.000',
        },
        {
          id: '2',
          nombre: 'sillon',
          imagen: '/assets/sillon-mostaza.jpg',
          descripcion: 'sillon de pana con patas de madera',
          precio: '$15.000',
        },
      ];
  const getItem = () => {
    return new Promise((resolve) => {
      resolve(detalles);
    });
  };
  getItem().then((resp) => {
    setTimeout(() => {
      console.log(resp.map((detalle) => detalle.nombre));
    }, 5000);
  });
  
return (
    detalles.map(detail =>  <ItemDetail key={detail.id} detail={detail} />)
)
}
