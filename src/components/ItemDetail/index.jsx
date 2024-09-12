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
                <img className="item-detail__img" src={`/public/${img}`} alt={name} />
            </picture>
            <article className="item-detail__info">
                <h4 className="item-detail__info--category">{category}</h4>
                <h4 className="item-detail__info--name">{name}</h4>
                <p className="item-detail__info--price">$ {price} .-</p>
                <p className="item-detail__info--dues">{dues} CUOTAS SIN INTERÉS</p>
                <p className="item-detail__info--description">Descripción: {description}</p>
                <div className="item-detail__count">
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
            </article>
        </section>
    );
};

export default ItemDetail;
