import { useState, useEffect } from "react";
import { getProductById } from "../Counter/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react"



const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId).then(response =>{
            setproduct(response)
        })
    },[productId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer


