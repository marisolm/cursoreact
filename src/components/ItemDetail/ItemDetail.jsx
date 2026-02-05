import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    return (
        <div className="itemDetail">
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>        
        </div>
    );
};
export default ItemDetail;