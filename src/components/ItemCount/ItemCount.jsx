import { useState } from "react";  

const ItemCount = ({ stock, addToCart }) => {
    const [count, setCount] = useState(1);

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(1);
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            setCount(stock);
        }
    }

    return (        
    
        <div className="item-count">
            <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button>
            <p></p>
            <button onClick={() => addToCart(count)}>Agregar al carrito</button>
        </div>

    );
} 

export default ItemCount;