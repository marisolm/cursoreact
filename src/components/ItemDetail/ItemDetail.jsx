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
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>        
            <ItemCount stock={product.stock} addToCart={addToCart} />
        </div>

    );
};

export default ItemDetail;