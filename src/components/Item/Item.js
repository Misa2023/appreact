import { Link } from "react-router-dom"

const Item = ( {products} ) => {
    return (
        <div>
            <img src= {products.img} alt={products.name} />
            <h3> {products.name} </h3>
            <p> {products.price} </p>
            <Link to={`/detalles/${products.id}`}> Ver detalles</Link>
        </div>
     )
}
export default Item