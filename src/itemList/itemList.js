import Item from "../Counter/Item/Item"

const ItemList = ({products}) => {
    return (
        <div>
            {products.map(product =>(
              <Item key={product.id}{...product}/>
            ))}
        </div>
    )
}




export default ItemList