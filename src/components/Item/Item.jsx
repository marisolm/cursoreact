import {Link } from "react-router";
import "./item.css";


const Item = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <Link to={`/detail/${product.id}`} className="item-button">MÁS INFORMACIÓN</Link>
        </div>
    );
}

export default Item;