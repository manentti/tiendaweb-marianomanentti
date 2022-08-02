const Item = ({product}) =>{
    return(
        <li key={product.id}>{product.name}{product.img}</li>
        
    )
}

export default Item