
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h1>LISTADO DE PRODUCTOS</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer