import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext1'
import { useCart } from '../../context/cartContext'
import { PRODUCTS } from '../../data/products'
import { AppleCount } from './AppleCount'
import { Count } from '../Count/Count'
import Loader from '../rickandmorty/Loader'

//const ITEM = {id: 1 , title:"Macbook Air M1", description: "Apple thinest laptop", price: 999, stock: 10}

const AppleDetail = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    const { addToCart } = useCart()
    

useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
        console.log(res)
    })
},[ id ])

const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
        const item = PRODUCTS.find( p => p.id == id )
        setTimeout(() => {
            resolve( item )
        }, 500);
    })
}

const addHanlder = () => { 
    addToCart ( id )
 }

  return (
    <div>
        <h1>Detalles del producto: { id }</h1>
        <li>{item.title}</li>
        <li><img src={item.img}/></li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <AppleCount stock={item.stock}/>
        <button className='btn' onClick={addHanlder}>Agregar al carrito</button>
    </div>
  )
}

export default AppleDetail


//After Contexto
// export const ItemDetail = ({item}) => {

// const {addNewProduct} = useCartContext()

// const onAdd = (quantity) => {
//     addNewProduct(item, quantity)
// }

// return (
//     <article>
//         <h1>{item.title}</h1>
//         <div className='card-detail'>
//             <div className='card-detail-left'>
//                 <img src={item.img} alt={item.title} className='img'/>
//             </div>
//              <div className='card-detail-right'>
//                 <p>{item.description}</p>
//                 <p className='price'>${item.price}</p>
//                 <p>Stock: {item.stock}</p>
//                 <Count stock={item.stock} initial={0} onAdd={onAdd}/>
//             </div>
//         </div>
//     </article>
// )
// }
//After Contexto