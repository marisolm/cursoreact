import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ product }) => {

    const onAdd = (count) => {
        alert(`Has seleccionado ${count} unidades de ${product.name}`);
        console.log("Cantidad enviada al carrito:", count);
    };

    return (
        <div className="item-detail">
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>        
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        </div>

    );
};

export default ItemDetail;