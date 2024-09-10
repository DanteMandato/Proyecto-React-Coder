import React from "react";

const ItemDetail = ({ name, img, price, description, category}) => {
    return (
        <section className="item-detail">
            <button onClick={onBack}>Volver a la tienda</button>
            <picture className="item-detail__picture">
                <img className="item__picture item__picture--img" src={`/public/${img}`} alt={`${name}`} />
            </picture>
            <article className="item-detail__info">
                <p><strong>Categoria:</strong> {category}</p>
                <h2> {name}</h2>
                <p><strong>Descripcion:</strong> {description}</p>
                <p><strong>Precio:</strong>$ {price}</p>
                <p><strong>Cuotas:</strong> {dues}</p>
                <form className="item-detail__form" action="" method="POST" encType="application/x-www-form-urlencoded">
                    <div className="item-detail__form--container">
                        <button className="item-detail__form--btn" type="button">-</button>
                        <input className="item-detail__form--input" type="text" placeholder="0" />
                        <button className="item-detail__form--btn" type="button">+</button>
                    </div>
                    <input className="item-detail__form--submit" type="submit" value="Agregar al Carrito" />
                </form>
            </article>
        </section>
    );
}

export default ItemDetail;
