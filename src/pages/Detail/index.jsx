import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail"; 

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    useEffect(() => {
        fetch("/src/data/items.json")
            .then((res) => res.json())
            .then((data) => setItem(data.find((item) => item.id == id)));
    }, [id]);

    return (
        <div>
            <button onClick={handleBack}>Volver a la tienda</button>
            {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
        </div>
    );
};

export default Detail;
