import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase.config.js"; 

import ItemDetail from "../../components/ItemDetail"; 
import Spinner from "../../components/Spinner";

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    useEffect(() => {
        const getItemFromFirebase = async () => {
            setLoading(true);
            try {
                const docRef = doc(db, "items", id); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError("El producto no fue encontrado");
                }
            } catch (e) {
                console.error('Error al buscar el elemento: ', e);
                setError("Hubo un error cargando el producto");
            } finally {
                setLoading(false); 
            }
        };

        getItemFromFirebase();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>{error}</p>; 
    }

    return (
        <div>
            <button className="button__back" onClick={handleBack}>Volver a la tienda</button>
            {item ? <ItemDetail {...item} /> : <p>El producto no fue encontrado.</p>}
        </div>
    );
};

export default Detail;
