import { useState } from 'react';
import ItemCount from '../ButtonCount';

const ItemDetail = ({ name, img, price, description, category, dues }) => {
    const [quantity, setQuantity] = useState(1); 

    const onAdd = (qty) => {
        setQuantity(qty);
        console.log(`Agregaste ${qty} unidades al carrito`);

    };

    return (
        <section className="item-detail">
            <picture className="item-detail__picture">
                <img className="item__picture item__picture--img" src={`/public/${img}`} alt={name} />
            </picture>
            <article className="item-detail__info">
                <p><strong>Categoria:</strong> {category}</p>
                <h2>{name}</h2>
                <p><strong>Descripcion:</strong> {description}</p>
                <p><strong>Precio:</strong> $ {price}</p>
                <p><strong>Cuotas:</strong> {dues}</p>
                <div className="item-detail__count">
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
            </article>
        </section>
    );
};

export default ItemDetail;
