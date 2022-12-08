const products = [
    {
        img: "https://images.samsung.com/is/image/samsung/latin-galaxy-j7-j710m-sm-j710mzdntpa-frontgold-thumb-61541392",
        producto: "celular",
        name: "J7",
        price: 18000,
        id: 1,

    },
    {
        img: "https://images.samsung.com/is/image/samsung/latin-galaxy-j7-j710m-sm-j710mzdntpa-frontgold-thumb-61541392",
        producto: "celular",
        name: "a30s",
        price: 40000,
        id: 2,
    },
    {
        img: "https://images.samsung.com/is/image/samsung/latin-galaxy-j7-j710m-sm-j710mzdntpa-frontgold-thumb-61541392",
        producto: "celular",
        name: "G3",
        price: 9000,
        id: 3,
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}


export default products
