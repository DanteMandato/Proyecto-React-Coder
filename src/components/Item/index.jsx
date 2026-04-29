import { Link } from "react-router-dom";

/**
 * Item
 *
 * CORRECCIÓN: Se agrega el prop `tag` al destructuring y se usa en el
 * span, en lugar del string hardcodeado "NUEVO". Aunque ItemList
 * actualmente siempre pasa tag="NUEVO", dejarlo como prop hace el
 * componente reutilizable (ej: tag="OFERTA", tag="AGOTADO").
 */
const Item = ({ name, img, price, category, dues, id, tag }) => {
    return (
        <article className="item">
            <Link to={`/detalle/${id}`}>
                {tag && <span className="item__pill">{tag}</span>}
                <picture className="item__picture">
                    <img
                        className="item__picture item__picture--img"
                        src={img}
                        alt={name}
                    />
                </picture>
                <div className="item__info">
                    <h4 className="item__info--title">{category}</h4>
                    <h4 className="item__info--item">{name}</h4>
                    <p className="item__info--price">$ {price} .-</p>
                    <p className="item__info--dues">{dues} CUOTAS SIN INTERÉS</p>
                </div>
            </Link>
        </article>
    );
};

export default Item;
