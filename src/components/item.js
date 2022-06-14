import React from 'react';
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
                    {`${prod.nombre} - ${prod.descripcion}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    {prod.stock}
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </div>
            </div>
        </div>



    );
}




