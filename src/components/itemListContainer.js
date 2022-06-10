import { useEffect, useState } from "react";
import ItemList from "./itemList";
// import { getFetch } from "../../helpers/getFetch";



const ItemListContainer = () => {
    // const [productos, setProductos] = useState([])
    //  const [loading, setLoading] = useState(true)   
   
    // useEffect(()=>{
    //     getFetch()// llamada a la api
    //     .then((resp)=> {
    //             setProductos(resp)
    //             setLoading(false)
    //     })
    //     .catch(err => console.log(err))
    //     // .finally(()=> )
    // }, [])

   
   
    return (
        <div>
             
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList  />                   
                </div>             
            
        </div>
    )
}

export default ItemListContainer
