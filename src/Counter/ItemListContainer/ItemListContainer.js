import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"

const ItemListContainer = (props) => {
   const [products,setProducts] = useState([])
   const [loading, setLoading] = useState(true)

    useEffect(() =>{
       getProducts().then(response => {
         setProducts(response)
       }).catch(error =>{
         console.log(error)
       }).finally(()=>{
         setLoading(false)
       })



    },[])


   if(loading){
      return <h1>gargando productos...</h1>
   }


    const productosTransformados = products.map(product =>(
      <li key={product.id}>{product.name}</li>
    ))
    
     return (
        <>
          <h1>{props.greeting}</h1>
          <ul>{productosTransformados}</ul>
        </>

     )
}

export default ItemListContainer