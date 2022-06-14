import ItemList from "./itemList";
// import { getFetch } from "../../helpers/getFetch";



const ItemListContainer = () => {
    return (
        <div>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList  />                   
                </div>             
        </div>
    )
}

export default ItemListContainer
