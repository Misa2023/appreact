import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div className="padre-item">
            <h1 className="titulo"> {props.greeting} </h1>
        </div>
    )
}

export default ItemListContainer