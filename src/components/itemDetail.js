import { useCartContext } from "../contexts/cartContext"
import ItemCount from "./itemCount"


export default function ItemDetail  ({producto}) {
    const { cart, addToCart } = useCartContext()
    /// estado 
    const onAdd = (cant) => {
        console.log(cant)
        addToCart( {...producto, cantidad: cant} )
    }

    console.log(cart)

    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.imagen} alt="" className="w-50 m-5" />
            </div>
            <div className="col-md-6 mt-5"> 
                <div className="row mt-5">
                    <h2>nombre: {producto.nombre}</h2>
                    <h3>categoría: {producto.categoria}</h3>
                    <h4>precio: {producto.precio}</h4>
                </div>               
                <div className="row">
                    <div className="col">
                       
                        <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}



