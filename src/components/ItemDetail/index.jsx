import { useContext } from 'react';
import ItemCount from '../ButtonCount';
import { CartContext } from '../../context/CartContext';

/**
 * ItemDetail
 *
 * CORRECCIÓN 1: Se eliminó el estado local `quantity` duplicado. La
 * cantidad la gestiona internamente ItemCount; aquí solo necesitamos
 * reaccionar al evento onAdd con la cantidad final.
 *
 * CORRECCIÓN 2: Se usa el prop `stock` real que viene de Firestore en
 * lugar del valor hardcodeado `stock={10}`.
 */
const ItemDetail = ({ id, name, img, price, description, category, dues, stock }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (qty) => {
        // Añade el ítem al carrito con todos sus datos y la cantidad elegida
        addItem({ id, name, price, img, quantity: qty });
    };

    return (
        <section className="item-detail">
            <picture className="item-detail__picture">
                <img className="item-detail__img" src={`/Products/${img.replace('/Products/', '')}`} alt={name} />
            </picture>
            <article className="item-detail__info">
                <h4 className="item-detail__info--category">{category}</h4>
                <h4 className="item-detail__info--name">{name}</h4>
                <p className="item-detail__info--price">$ {price} .-</p>
                <p className="item-detail__info--dues">{dues} CUOTAS SIN INTERÉS</p>
                <p className="item-detail__info--description">{description}</p>
                <div className="item-detail__count">
                    {/* CORRECCIÓN 2: stock viene de los datos del producto, no hardcodeado */}
                    <ItemCount
                        stock={stock || 10}
                        initial={1}
                        onAdd={onAdd}
                    />
                </div>
            </article>
        </section>
    );
};

export default ItemDetail;
