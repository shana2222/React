import { Link } from 'react';
import Item from "../Item/Item";

const ItemList = ({ productList }) => {
    return (
        <div className="card-grid-container">

            {productList.map((product) => (
                <Link to={'item/' + product.id} key={product.id}>
                    <Item
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                </Link>

            ))}

        </div>
    )
}

export default ItemList
