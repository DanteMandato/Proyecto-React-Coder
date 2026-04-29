import { useState } from 'react';

/**
 * ItemCount
 *
 * CORRECCIÓN: Este componente ya NO accede a CartContext directamente.
 * Antes, llamaba a addItem() con props que nunca se le pasaban (id, name,
 * img, price, category → todos undefined), lo que añadía ítems "vacíos"
 * al carrito. Ahora recibe una prop `onAdd` del padre (ItemDetail) que
 * es quien tiene todos los datos del producto y se encarga de añadirlos.
 *
 * @param {number}   stock   - Stock disponible del producto
 * @param {number}   initial - Cantidad inicial del contador
 * @param {function} onAdd   - Callback que recibe la cantidad seleccionada
 */
const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAdd = () => {
        // Llama al callback del padre con la cantidad elegida
        if (onAdd) onAdd(quantity);
    };

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <input
                className="button"
                type="button"
                value="Agregar al Carrito"
                onClick={handleAdd}
            />
        </div>
    );
};

export default ItemCount;
