import { useState, useEffect } from "react"
import { getProductById, getProducts, getProductsByCategory, setProductsByCtegory} from "../asyncMock"
import ItemList from "../../itemList/itemList"
import { useParams} from "react"


const ItemListContainer = (props) => {
   const [products,setProducts] = useState([])
   const [loading, setLoading] = useState(true)

   const {categoryId} = useParams

   useEffect(() =>{
    const asncfuntion = categoryId? getProductsByCategory : getProducts
    
    asyncFunction(categoryId).then(response => {
      setProducts(response)
    }).catch(error =>{
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
   




    //useEffect(() =>{
      // getProducts().then(response => {
        // setProducts(response)
       //}).catch(error =>{
        // console.log(error)
      // }).finally(()=>{
         //setLoading(false)
       //})



    },[categoryId])


   if(loading){
      return <h1>gargando productos...</h1>
   }


     //const productosTransformados = products.map(product =>(
       //<li key={product.id}>{product.name}{product.price}{product.categoria}</li>
     //))
    
     return (
        <>
          <h1>{props.greeting}</h1>
          
          <ItemList products={products}/>
        </>

     )
}

export default ItemListContainer