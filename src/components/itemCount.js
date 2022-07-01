import { useState } from "react"
import { TextComponent } from "./textComponent"

export default function ItemCount  ({initial,stock,  onAdd, producto})  {
  
    const [count, setCount] = useState(initial)

    function suma() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function resta() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
    }

    return (
        <>
            {/* <center> */}
                <div className="container m-5 w-25 border rounded border-3 border-primary" style={{ textAlign: 'center'  }}>                   
                    <span className="alert alert-success w-100" >
                        { count }
                    </span>                   
                    <span>
                        <TextComponent>{producto.stock} </TextComponent>
                    </span>
                    <br />
                    <div className="mt-6">
                        <button onClick={suma} className='btn ' > + </button> 
                        <button onClick={resta} className='btn ' > - </button><br/>
                    </div>
                  <button onClick={agregar} className='btn '>agregar</button>
                </div>
           
        </>
    )
}

