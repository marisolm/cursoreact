import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="cart">
            <Link to="/cart">
                <IoCartOutline size={50}/>
            </Link>
            <span className="cart-count">{totalQuantity() }</span>
        </div>
    );
}

export default CartWidget;
