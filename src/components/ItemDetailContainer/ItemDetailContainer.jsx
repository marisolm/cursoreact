import { useState , useEffect } from "react";
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {  
        setLoading(true);

        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
        //console.log("Product ID: ", productId);
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