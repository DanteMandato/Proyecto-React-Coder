import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../config/firebase.config";

import ItemList from '../../containers/ItemList'; 
import Spinner from '../../components/Spinner'; 

const categories = [
    "Facial",
    "Cabello",
    "Cuerpo",
];

const Home = () => {
    const { category } = useParams(); 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fallback, setFallback] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(category || '');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsOpen(false); 
    };

    useEffect(() => {
        setLoading(true);

        const itemsCollection = selectedCategory
            ? query(collection(db, 'items'), where('category', '==', selectedCategory))
            : collection(db, 'items');

        getDocs(itemsCollection) 
        .then((snapshot) => {
            if (snapshot.size === 0) {
                setFallback(true);
            } else {
                setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setFallback(false);
            }
        })
        .catch(err => {
            setFallback(true); 
            console.error('Error fetching items:', err); 
        })
        .finally(() => setLoading(false));
    }, [selectedCategory]); 

    return (
        <main className="store">
            { loading ? (
                <Spinner />
            ) : fallback ? (
                <p>No pudimos cargar los productos</p>
            ) : (
                <>
                    <aside className="store__aside">
                        <div className={`filter-dropdown ${isOpen ? 'active' : ''}`}>
                            <button className="filter-btn" onClick={toggleDropdown}>
                                Filtrar por categoría
                            </button>
                            {isOpen && (
                                <div className="filter-content">
                                    <ul>
                                        {categories.map((cat) => (
                                            <li key={cat}>
                                                <button
                                                    className={selectedCategory === cat ? 'active' : ''}
                                                    onClick={() => handleCategoryChange(cat)}
                                                >
                                                    {cat}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </aside>
                    <ItemList className="store__items" items={items} />
                </>
            )}
        </main>
    );
};

export default Home;
