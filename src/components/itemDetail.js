import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./itemCount"
import { CartContext } from "../contexts/cartContext"


export default function ItemDetail({ producto }) {
    // const { nombre, precio, image, stock, initial } = producto;

    const { AddToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {

        AddToCart(producto, cantidad);

    };
    // const { AddToCart } = useContext(CartContext);


    // // const [ estado, setEstado ] = useState()

    // const onAdd = (cant) => {
    //     console.log(cant)
    //     //setEstado(cant)
    //     addToCart({ ...producto, cantidad: cant })
    // }

    // console.log(cart)

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



