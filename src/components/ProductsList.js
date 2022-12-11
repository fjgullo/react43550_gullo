import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
    { id: 1, name: 'Iphone', stock: 12 },
    // { id: 2, name: 'Galaxy', stock: 14 },
    // { id: 3, name: 'Xiaomi', stock: 23 },
]
const ProductsList = () => { 
    
    const [products, setProducts] = useState ( [] )


useEffect(() => {
    console.log('Empieza getProducts')
    getProducts().then( response => {
        console.log( response );
        setProducts ( response )
    })
    console.log('Termina getProducts')
}, [])

const getProducts = () => { 
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
            //Podemos cambiarlo por objetos y ponerle distintas propiedades, podemos definirlo fuera de la funcion de una manera mas global
            resolve( PRODUCTS )
        }, 2000)
    })
 }


// const randomPromise = () => { 
//     const productsPromise = new Promise ( (resolve, reject) => {
//         const rand = Math.random()
//         console.log(rand);
//         if ( rand > 0.5 ) {
//             resolve('Se resolvio satisfactoriamente')
//         }
//                 reject('Rechazada!')
//     })

//     productsPromise.then ( ( response) => {
//         console.log( 'RESPUESTA: ', response );
//     } ).catch( ( err ) => {
//         console.log('ERROR:', err);
//     })
//  }

  return (
    <div>
        <h1>ProductsList</h1>
        { products.map( p => <ProductCard key={p.id} {...p}/> ) }        
        </div>
  )
}

export default ProductsList
