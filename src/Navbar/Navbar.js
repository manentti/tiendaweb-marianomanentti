import React from "react"
//import Button from "../Counter/Button/Button"
import { Link } from "react-router-dom"
const Navbar = () =>{
    return(
        <nav className="Navbar">
            
            <Link>
                e-commerce
            </Link>
            <div className="Categoris">
                <Link to="/category/comun" className="option">dragon</Link>
                <Link to="/category/poco comun" className="option">dragon</Link>
                <Link to="/category/mitica" className="option">dragon</Link>
            </div>
        </nav>
    )
}
export default Navbar