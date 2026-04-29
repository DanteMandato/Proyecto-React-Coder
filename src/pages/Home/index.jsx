import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../config/firebase.config";

import ItemList from '../../containers/ItemList';
import Spinner from '../../components/Spinner';

const categories = ["Facial", "Cabello", "Cuerpo"];

/**
 * Home
 *
 * CORRECCIÓN: Se eliminó `useParams` porque la ruta '/' no tiene
 * parámetros de URL. `useParams()` devolvía siempre `{}`, haciendo que
 * `category` fuera siempre `undefined`. El filtrado ya se manejaba
 * correctamente con el estado local `selectedCategory`.
 *
 * MEJORA: Se agrega un botón para limpiar el filtro activo.
 */
const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fallback, setFallback] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setIsOpen(false);
    };

    const clearCategory = () => {
        setSelectedCategory('');
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
            {loading ? (
                <Spinner />
            ) : fallback ? (
                <p>No pudimos cargar los productos</p>
            ) : (
                <>
                    <aside className="store__aside">
                        <div className={`filter-dropdown ${isOpen ? 'active' : ''}`}>
                            <button className="filter-btn" onClick={toggleDropdown}>
                                {selectedCategory ? `Categoría: ${selectedCategory}` : 'Filtrar por categoría'}
                            </button>
                            {isOpen && (
                                <div className="filter-content">
                                    <ul>
                                        {/* Opción para ver todos */}
                                        <li>
                                            <button
                                                className={selectedCategory === '' ? 'active' : ''}
                                                onClick={clearCategory}
                                            >
                                                Todos
                                            </button>
                                        </li>
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
