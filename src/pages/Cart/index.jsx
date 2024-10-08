import React, { useContext, useState } from 'react'; 
import { CartContext } from '../../context/CartContext';
import Modal from '../../components/Modal'; 

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    const [modalOpen, setModalOpen] = useState(false);
    const total = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

    const handleRemove = (id) => {
        removeItem(id);
    };

    const handleClear = () => {
        clearCart();
    };

    const handleCheckout = () => {
        setModalOpen(true);
    };

    if (cart.length === 0) {
        return <p>El carrito está vacío</p>;
    }


    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            <div className="cart__items">
                {cart.map((item) => (
                    <div className="cart__item" key={item.id}> 
                        <img src={item.img} alt={item.name} />
                        <div className="cart__item-info">
                            <h4>{item.name}</h4>
                            <p>Precio: $ {item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => handleRemove(item.id)}>Quitar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart__summary">
                <h4>Subtotal: $ {total.toFixed(2)}</h4>
                <button onClick={handleClear}>Vaciar Carrito</button>
                <button onClick={handleCheckout}>Completar Compra</button>
            </div>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
            <button className='cart__button-sumbit' onClick={() => window.location.href = '/'}>Seguir Comprando</button>
        </div>
    );
};

export default Cart;
