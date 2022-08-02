const products = [
    {
        id:'1',
        name:"carta 1",
        price:"500",
        categoria:"comun",
        img:"https://m.media-amazon.com/images/I/51NwJRqrX-L._AC_.jpg",
        stock:"2",
        description:"dragon",

        id:"2",
        name:"carta 2",
        price:"500",
        categoria:" poco comun",
        img:"https://m.media-amazon.com/images/I/51NwJRqrX-L._AC_.jpg",
        stock:"2",
        description:"dragon negro",

        id:"3",
        name:"carta 3",
        price:"500",
        categoria:"mitica",
        img:"https://m.media-amazon.com/images/I/51NwJRqrX-L._AC_.jpg",
        stock:"2",
        description:"dragon blanco",

        
        id:"4",
        name:"carta 4",
        price:"500",
        categoria:"mitica",
        img:"https://m.media-amazon.com/images/I/51NwJRqrX-L._AC_.jpg",
        stock:"2",
        description:"dragon blanco",
         
        id:"5",
        name:"carta 5",
        price:"500",
        categoria:"mitica",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/250px-WoW_icon.svg.png",
        stock:"2",
        description:"dragon blanco",

    }
]

export const getProducts = () => {
    return new Promise((resolve)=>{
         setTimeout (()=>{
            resolve(products)
        }, 2000)
    })    
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}