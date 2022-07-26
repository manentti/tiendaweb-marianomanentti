import React from "react"
import Button from "../Counter/Button/Button"
const Navbar = () =>{
    return(
        <nav className="Navbar">
            
            <nav>
                e-commerce
            </nav>
            <div>
                <Button label="celular"color="red" handleClick={() => console.log("celular")}/>
                <Button label="mazo" color="blue" handleClick={() => console.log ("mazo")}/>
                <Button label="tipos" color ="green"handleClick={() => console.log ("topos")}/>
                <Button label="meta"/>
               
                
            </div>
        </nav>
    )
}
export default Navbar