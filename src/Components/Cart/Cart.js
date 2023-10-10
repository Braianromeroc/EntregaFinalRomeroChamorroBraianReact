import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <h2 className='text-center'>No hay elementos en el carrito</h2>
                <div className='text-center'>
                <Link className='btn btn-secondary mt-4' to="/">Hacer compras</Link>
                </div>
            </>
        );
    }

    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <div className='container text-end'>
            <h4>total: $ {totalPrice()}</h4>

            <Link to="/checkout">
                {' '}
                <button className="btn btn-outline-success">Finalizar Compra</button>
            </Link>
            </div>
        </>
    );
};

export default Cart;