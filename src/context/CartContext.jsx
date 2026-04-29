import { createContext, useState } from "react";

export const CartContext = createContext();

/**
 * CartContextProvider
 *
 * CORRECCIÓN: Se reemplazan todas las actualizaciones de estado que leían
 * `cart` directamente (setCart(cart.map(...))) por la forma funcional
 * (setCart(prev => prev.map(...))). Esto evita bugs de estado "stale"
 * (viejo) si se llaman múltiples setState en el mismo ciclo de render.
 *
 * MEJORA: Se agrega `getTotalItems` para que los widgets puedan calcular
 * el total sin repetir la lógica.
 */
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart(prev => {
            const alreadyExist = prev.find(current => current.id === item.id);
            if (alreadyExist) {
                // Suma la nueva cantidad a la existente
                return prev.map(current =>
                    current.id === item.id
                        ? { ...current, quantity: current.quantity + item.quantity }
                        : current
                );
            }
            return [...prev, { ...item, quantity: item.quantity || 1 }];
        });
    };

    const removeItem = (id) => {
        setCart(prev => prev.filter(current => current.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    // Cantidad total de unidades en el carrito
    const getTotalItems = () =>
        cart.reduce((acc, item) => acc + item.quantity, 0);

    // Precio total del carrito
    const getTotalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
