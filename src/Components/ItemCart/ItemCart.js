import React from 'react';
import { useCartContext } from '../../Context/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='container'>
            <div className='d-flex mb-3'>
                <div className='itemCart col-2' >
                    <img className='img-fluid w-100' src={product.img} alt={product.title} />
                </div>
                <div className='p-4'>
                        <h3>Título: {product.title}</h3>
                        <p>Precio c/u: $ {product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Subtotal: ${product.quantity * product.price}</p>
                        <button className='btn btn-secondary btn-sm' onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart