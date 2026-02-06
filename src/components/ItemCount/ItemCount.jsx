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
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={() => addToCart(count)}>Agregar al carrito</button>
        </div>

    );
} 

export default ItemCount;