import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (
        <div className='d-flex pt-4'>
            <div className='col-md-3 offset-md-2'>
                <img src={item.img} className='img-fluid' alt={item.title} />
            </div>
            <div className='col-md-5 p-3'>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p> $ {item.price}</p>
                    <p> Cantidad: {item.stock}</p>
                </div>
                <div className=''>
                    {goToCart ? <Link className='btn btn-outline-success mt-5' to='/cart'>Terminar compra</Link> : <ItemCount stock={10} initial={0} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail