import { useState, useEffect } from "react";  
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router";
import { getProducts } from "../../data/data.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {

        setLoading(true);

        getProducts().then((response) => {
            if (category) {
                const filteredProducts = response.filter(product => product.category === category);
                setProducts(filteredProducts);
            } else {
                setProducts(response);
            }
                setLoading(false);
            });

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
