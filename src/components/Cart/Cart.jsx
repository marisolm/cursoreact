import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router";
import "./Cart.css"

export const Cart = () => {
    const { cart , totalPrice, deleteCart, deleteProduct } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
            <div>
                <h2>El carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(productCart => (
                <div className="product-cart" key={productCart.id}>
                    <img src={productCart.image} alt={productCart.name} width={100}/>
                    <p>{productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio unitario: ${productCart.price}</p>
                    <p>Precio: ${productCart.price * productCart.quantity}</p>
                    <button onClick={() => deleteProduct(productCart.id)}>Eliminar</button>
                </div>
            ))}

            <h3>Total: ${totalPrice()}</h3>
            <button onClick={deleteCart}><BsTrash3Fill/>Vaciar carrito</button>
            <br/>
            <Link to="/checkout">Finalizar mi compra</Link>
        </div>
    )
}

export default Cart;