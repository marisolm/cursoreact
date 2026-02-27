import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <div className="cart">
            <Link to="/cart">
                <IoCartOutline size={50}/>
            </Link>
            {
            quantity >0 && <span className="cart-count">{quantity}</span>
            }   
        </div>
    );
}

export default CartWidget;
