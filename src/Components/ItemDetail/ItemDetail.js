import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className='row'>
            <div className='text-center col-md-4 offset-md-4'>
                <img src={item.img} className='img-fluid' alt={item.titulo} />
                <h2>{item.titulo}</h2>
                <p> Autor: {item.autor}</p>
                <p> $ {item.precio}</p>
                <p> Cantidad: {item.stock}</p>
            </div>
            <div>
                <ItemCount stockItems={10} />
            </div>
        </div>
    )
}

export default ItemDetail;