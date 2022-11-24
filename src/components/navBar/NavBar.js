import "./NavBar.css"
import CartWidget from "../cartWidget/CartWidget"

const NavBar = (props) => {
    return (
        <nav>
            <div className="titulo-padre">
                <h1 className="title">thinking-name</h1>
            </div>
            <div className="div-padre-nav">
                <button className="boton">zapatillas</button>
                <button className="boton">bolsas</button>
                <button className="boton">perfumes</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar