import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const alreadyExist = cart.find(currentItem => currentItem.id === item.id);

        if (alreadyExist) {
            setCart(cart.map(currentItem => 
                currentItem.id === item.id ? {
                    ...currentItem, 
                    quantity: currentItem.quantity + item.quantity
                } : currentItem
            ));
        } else {
            const quantity = item.quantity || 1;
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(currentItem => currentItem.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
