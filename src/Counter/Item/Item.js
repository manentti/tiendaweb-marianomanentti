import { Link } from "react-router-dom"


const Item = ({id,name, img, price}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHEADER">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: ${price}

                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`7detail/${id}`} className="Opcion">ver detalle</Link>
            </footer>
        </article>

        
        
    )
}



export default Item