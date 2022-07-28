const products = [
    {
        id:"1",
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
        name:"carta 3",
        price:"500",
        categoria:"mitica",
        img:"https://m.media-amazon.com/images/I/51NwJRqrX-L._AC_.jpg",
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