import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';

import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    doc,
    getDoc,
} from 'firebase/firestore';

export const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const { cart, removeProduct, totalPrice } = useCartContext();

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor completa todos los campos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden');
            return;
        }

        const total = totalPrice();
        const orden = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.title,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProduct();
                    })
                    .catch((error) => {
                        console.log('Error en creacion de orden', error);
                        setError('Error en orden');
                    });
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actualizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');
    };

    return (
        <>
            <h2 className="info p-2">
                Llene el formulario de compra
            </h2>

            <form onSubmit={manejadorFormulario}>
                {cart.map((producto) => (
                    <div className="item-check" key={producto.id}>
                        <p>
                            {' '}
                            {producto.nombre}  {producto.cantidad}
                        </p>
                        <p>  {producto.precio} </p>

                    </div>
                ))}

                <div className="form-group container">
                    <label className="lab-check p-2">Nombre</label>
                    <input
                        className="input-check"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="form-group container">
                    <label className="lab-check p-2">Apellido</label>
                    <input
                        className="input-check"
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className="form-group container">
                    <label className="lab-check p-2">Telefono</label>
                    <input
                        className="input-check"
                        type="number"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className="form-group container">
                    <label className="lab-check p-2">Email</label>
                    <input
                        className="input-check"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group container">
                    <label className="lab-check p-2">Email Confirmacion</label>
                    <input
                        className="input-check"
                        type="email"
                        value={emailConfirmacion}
                        onChange={(e) => setEmailConfirmacion(e.target.value)}
                    />
                </div>

                {error && <p className="error-campos">{error}</p>}

                {ordenId && (
                    <p className="orden">
                        <strong>¡Gracias por tu compra!</strong> <br /> Un asesor se comunicara con usted para el envio del producto <br /> Este es tu numero de orden: <br /> <u>{' '}
                        {ordenId}{' '}</u>
                    </p>
                )}

                <div className="checking container">
                    <button className="check-bt mt-3 m-2 btn btn-success" type="submit">
                        Finalizar Compra
                    </button>
                </div>
            </form>
        </>
    );
};