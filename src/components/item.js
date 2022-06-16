import React from 'react';

import { Link } from "react-router-dom";

// COMPONENTE DESTINADO A MOSTRAR INFORMACION BREVE DEL PRODUCTO
//LA VISTA ES DE TIPO {ID,TITLE, PRICE, PICTUREurl
//}

export default function Item({ prod }) {
    return (
        <div
            className='col-md-4 p-1'
        >
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imagen} alt='' className='w-50' />
                    {prod.stock}
                </div>
                <div className="card-footer">
                <Link to={`/detalle/${prod.id}`} >
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>   
                    </Link> 
                </div>
            </div>
        </div>



    );
}


