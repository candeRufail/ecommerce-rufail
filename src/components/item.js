import React from 'react';

export default function Item({prod}) {
    //   const items = [
    //     {
    //       id: '0',
    //       nombre: 'silla',
    //       descripcion: 'material madera',
    //       stock: '5',
    //     },
    //     {
    //       id: '1',
    //       nombre: 'mesa',
    //       descripcion: 'material acero',
    //       stock: '9',
    //     },
    //     {
    //       id: '2',
    //       nombre: 'sillon',
    //       descripcion: 'material terciopelo',
    //       stock: '15',
    //     },
    //   ];
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




