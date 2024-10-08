import { Link } from "react-router-dom";

const Item = ({ name, img, price, category, dues, id }) => {

    return (
        <article className="item">
            <Link to={`/detalle/${id}`} >
                    <span className="item__pill">NUEVO</span>
                <picture className="item__picture">
                    <img className="item__picture item__picture--img" src={`/public/${img}`} alt={`${name}`} />
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
