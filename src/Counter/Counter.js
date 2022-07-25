import { useState, useEffect } from "react";

const Counter = ({show, stock, initial}) =>{
    const[count, setCount] = useState(0)

    useEffect(() =>{
        console.log("funcion")
    },[show])

    const decremen = () =>{
        if(count > initial){
            setCount(count -1)
            console.log("restando")
        }
       
    }
   
    const increment = () =>{
        if(count < stock){
            setCount(count +1)
            console.log("sumando")
        }
        
    }
    
    return(
        <div>
            <button onClick={decremen}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter