import React from 'react';
import ItemCount from '../components/itemCount';

export default function ItemListContainer({ saludo, stock, initial, onAdd }) {
    return (
        <div className="" style={{ maxWidth: "100%" }}>
            <h1>{saludo}</h1>
            <iframe src="https://embed.lottiefiles.com/animation/90901"></iframe>
            <ItemCount stock="10" />
        </div>
    )
}

