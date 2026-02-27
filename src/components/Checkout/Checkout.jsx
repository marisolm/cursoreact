import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [ orderId, setOrderId ] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const changeInput = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        
        const order = {
            buyer: { ...dataForm },
            products: [ ...cart ],
            total: totalPrice() 
        };

        uploadOrder(order);
    };

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);

        } catch (error) {
            console.error("Error al crear la orden: ", error);
        }
    };


    return (
        <div>
            <h1>Checkout</h1>
            {
                orderId ? ( 
                    <div>
                        <h2>¡Gracias por tu compra!</h2>
                        <h3>Tu número de orden es: {orderId}</h3>
                        <Link to="/">Volver a la tienda</Link>
                    </div>
                ) : (
                <form onSubmit={submitForm}>
                    <input type="text" name="fullname" value={dataForm.fullname} onChange={changeInput} placeholder="Nombre completo"/>
                    <input type="number" name="phone" value={dataForm.phone} onChange={changeInput} placeholder="Teléfono"/>
                    <input type="email" name="email" value={dataForm.email} onChange={changeInput} placeholder="Email"/>
                    <button type="submit">Finalizar mi compra</button>
                </form>
                )
            }
        </div>
    )
}

export default Checkout;