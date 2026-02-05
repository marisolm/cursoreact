import Item from "../Item/Item.jsx";
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (   
        <div className="item-list">
            {
                products.map((product) => (
                    <Item key={product.id} product={product}></Item>
                ))
            }
        </div>
    );
}

export default ItemList;