import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';  

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('/src/data/items.json')  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => setError(error)); 
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="items__container">
            {items.length > 0 ? (
                items.map(item => (
                    <Item 
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        category={item.category}
                        dues={item.dues}
                        tag={item.tag}
                    />
                ))
            ) : (
                <div>No items found</div>
            )}
        </div>
    );
};

export default ItemList;
