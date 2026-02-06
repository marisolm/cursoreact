import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>        
            <button className="item-detail-button">Agregar al carrito</button>
        </div>

    );
};
export default ItemDetail;