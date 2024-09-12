import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';  

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    console.log(category);

    useEffect(() => {
        fetch('/src/data/items.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (category) {
                    setItems(data.filter(item => item.category === category));
                } else {
                    setItems(data);
                }
            })
            .catch(err => setError(err)); 
    }, [category]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="items__container container">
            {items.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO"/>)}
        </section>
    );
};

export default ItemList;
