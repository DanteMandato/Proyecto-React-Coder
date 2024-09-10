import { useState } from 'react';  

const ItemCount = ({stock, initial, onAdd}) => {
    conts [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity ++)
        }
        const decrement = () => {
            if (quantity > 1) 
                setQuantity (quantity-1)
        }
    } 

    return(
        <div className="counter">
            <div className="controsl">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}