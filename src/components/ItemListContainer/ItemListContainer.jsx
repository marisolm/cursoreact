import { useState, useEffect } from "react";  
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    const getProducts = async () => {
        try {
            const productsRef = collection(db, "products");
            const dataDB = await getDocs(productsRef);
            const data = dataDB.docs.map((productDB) => {
                return{
                        id: productDB.id,
                        ...productDB.data()
                    }
            });
            setProducts(data);
        } catch (error) {
            console.error("Error obteniendo productos: ", error);
        } finally {
            setLoading(false);
        }
    };

    const getProductsByCategory = async (category) => {
        try {
            const productsRef = collection(db, "products");
            const q = query(productsRef, where("category", "==", category));
            const dataDB = await getDocs(q);
            const data = dataDB.docs.map((productDB) => {
                return{
                        id: productDB.id,
                        ...productDB.data()
                    }
            });
            setProducts(data);
        } catch (error) {
            console.error("Error obteniendo productos por categoría: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        if (category) {
            getProductsByCategory(category);
        } else {
            getProducts(); 
        }
    }, [category]);


    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            {
                loading === true ? <div>Cargando productos...</div> : <ItemList products={products} />
            }
        </div>
    );
};

export default ItemListContainer;
