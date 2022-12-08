import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import Contenido from './ContentGenerate'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { productosID } = useParams()

    useEffect(() => {
         getProductsById(productosID)
            .then(response => {
                setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })
},[productosID])  

    return (
        <div>
            <Contenido />
            <h1>{product.price}</h1>
        </div>
    )
}

export default ItemDetailContainer