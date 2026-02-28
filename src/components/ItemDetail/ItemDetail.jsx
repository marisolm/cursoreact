import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";


const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext);

    const addToCart = (count) => { 
        const newProduct = {...product, quantity:count};
        addProduct(newProduct);
   };

    return (
        <div className="item-detail">
            <div className="detail-image-container">
                <img className="detail-image" src={product.image} alt={product.name}/>
            </div>
            <div className="detail-info-container">
                <p className="detail-title">{product.name}</p>
                <p className="detail-description">{product.description}</p>
                <p className="detail-price">Precio: ${product.price}</p>        
                <ItemCount stock={product.stock} addToCart={addToCart} />
            </div>
            
        </div>

    );
};

export default ItemDetail;