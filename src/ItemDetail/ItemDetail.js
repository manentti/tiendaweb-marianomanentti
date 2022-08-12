import ItemCount from "../Counter/ItemCount/ItemCount";

const ItemDetail = ({id, name, category, img, price, strok, description}) => {
    const handleOnAdd = (quantity) => {
        console.log("agregue al carrito", quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h1>{id}{category}{strok}</h1>
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    )
}

export default ItemDetail