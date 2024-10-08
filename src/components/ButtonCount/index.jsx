import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ id, name, img, price, category, stock, initial }) => {
    const [quantity, setQuantity] = useState(initial);
    const { addItem } = useContext(CartContext);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addItemToCart = () => {
        addItem({ id, name, img, price, category, quantity });
    };

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <input className="button" type="button" value="Agregar al Carrito" onClick={addItemToCart} />
        </div>
    );
};

export default ItemCount;
