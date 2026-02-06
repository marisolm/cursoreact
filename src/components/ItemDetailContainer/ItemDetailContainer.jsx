import { useState , useEffect } from "react";
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {  
        getProductById(productId).then((data) => {
            setProduct(data);
        });
        //console.log("Product ID: ", productId);
    }, [productId]);     

return (
        <div className="item-detail-container">
           <ItemDetail product={product} /> 
        </div>
    );
};  

export default ItemDetailContainer;