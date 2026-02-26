import { useState , useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    const getProduct = async () => {
        try {
            const docRef = doc(db, 'products', productId);
            const dataDB = await getDoc(docRef);
            const data = { id: dataDB.id, ...dataDB.data() };
            setProduct(data);
            console.log('Producto obtenido: ', data.name);
        } catch (error) {
            console.error('Error al obtener el producto: ', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {  
        getProduct();
    }, [productId]);     

return (
        <div className="item-detail-container">
        {
            loading === true ? <div>Cargando productos...</div> : <ItemDetail product={product} /> 
        }
           
        </div>
    );
};  

export default ItemDetailContainer;