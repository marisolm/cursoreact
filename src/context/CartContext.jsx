import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (newProduct) => {
        if (cart.some(productCart => productCart.id === newProduct.id)) {
            const updateCart = cart.map(productCart => {
                if (productCart.id === newProduct.id) {
                    const updatedProduct = {...productCart, quantity: productCart.quantity + newProduct.quantity};
                    return updatedProduct;
                }else {
                    return productCart;
                }
            });
            setCart(updateCart);
            return;
        }
        setCart([...cart, newProduct]);                     
    }

    const deleteProduct = (id) => {
        const updateCart = cart.filter(productCart => productCart.id !== id);
        setCart(updateCart);
    }
    
    const deleteCart = () => {
        setCart([]);
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
        return price;
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteCart, deleteProduct }}>
            {children}
        </CartContext.Provider>
    );
}


export { CartProvider, CartContext };