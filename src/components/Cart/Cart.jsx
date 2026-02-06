import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"

export const Cart = () => {
    const { cart , totalPrice, deleteCart, deleteProduct } = useContext(CartContext);

  return (
    <div>
        {
            cart.length === 0? <h2>El carrito está vacío</h2>: (
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
                    <button onClick={deleteCart}>Vaciar carrito</button>
                </div>
            )
        }
    </div>
  )
}

export default Cart;