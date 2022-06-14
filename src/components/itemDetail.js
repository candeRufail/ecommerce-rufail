export default function ItemDetail({detail}) {
    return (
        //   <div>
        //       <div class="card" style="width: 18rem;">
        //   <img src="/assets/sillon-mostaza.jpg" class="card-img-top" alt="...">
        //   <div class="card-body">
        //     <h5 class="card-title">Card title</h5>
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     <a href="#" class="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>
        //   </div>

        // <div
        //     className='col-md-4 p-1'
        // >
        //     <div className="card w-100 mt-5" >
        //         <div className="card-header">
        //             <p> sillon de pana color mostaza con patas de madera </p>
        //         </div>
        //         <div className="card-body">
        //             <img src="/assets/sillon-mostaza.jpg" alt='' className='w-50' />
        //         </div>
        //         <div className="card-footer">
        //             <button className="btn btn-outline-primary btn-block">
        //                 Precio
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div
        className='col-md-4 p-1'
    >
        <div className="card w-100 mt-5" >
            <div className="card-header">
                <p>{detail.descripcion}</p>
            </div>
            <div className="card-body">
                <img src={detail.imagen} alt='' className='w-50' />
               
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                  {detail.precio}
                </button>
            </div>
        </div>
    </div>





    );
}



