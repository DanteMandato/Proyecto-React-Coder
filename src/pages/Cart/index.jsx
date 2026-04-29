import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Modal from '../../components/Modal';

/**
 * Cart
 *
 * CORRECCIÓN 1: Se reemplaza `window.location.href = '/'` por el hook
 * `useNavigate` de React Router. La navegación directa al DOM rompe el
 * historial del SPA y fuerza una recarga completa de la página.
 *
 * CORRECCIÓN 2: El Modal ahora recibe `onConfirm` para que al confirmar
 * la compra se vacíe el carrito y se redirija al inicio.
 *
 * MEJORA: Se usa `getTotalPrice` del context en lugar de recalcular.
 */
const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const total = getTotalPrice();

    const handleCheckout = () => setModalOpen(true);

    const handleConfirmPurchase = () => {
        // Al confirmar la compra: vaciamos el carrito y volvemos al inicio
        clearCart();
        setModalOpen(false);
        navigate('/');
    };

    if (cart.length === 0) {
        return (
            <div className="cart cart--empty">
                <p>El carrito está vacío</p>
                {/* CORRECCIÓN: useNavigate en lugar de window.location.href */}
                <button onClick={() => navigate('/')}>Ir a la tienda</button>
            </div>
        );
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
                            <button onClick={() => removeItem(item.id)}>Quitar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart__summary">
                <h4>Subtotal: $ {total.toFixed(2)}</h4>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button onClick={handleCheckout}>Completar Compra</button>
            </div>

            {/* CORRECCIÓN: Modal recibe onConfirm para manejar el flujo completo */}
            {modalOpen && (
                <Modal
                    closeModal={() => setModalOpen(false)}
                    onConfirm={handleConfirmPurchase}
                />
            )}

            <button className='cart__button-sumbit' onClick={() => navigate('/')}>
                Seguir Comprando
            </button>
        </div>
    );
};

export default Cart;
