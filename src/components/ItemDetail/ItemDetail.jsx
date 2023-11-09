
const ItemDetail = ({ itemSelected }) => {
    return (
        <div>
            <div className="card-container">
                <h6 className="card-title">  {itemSelected?.title}</h6>
                <img src={itemSelected?.image} alt={title} width={70} />
                <div className="card-description">
                    <p> {itemSelected?.description} </p>
                </div>
                <p>$ {itemSelected?.price} </p>
            </div>
        </div>
    )
}

export default ItemDetail
