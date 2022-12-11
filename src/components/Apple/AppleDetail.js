import React, { useEffect, useState } from 'react'
import { AppleCount } from './AppleCount'

const ITEM = {id: 1 , title:"Macbook Air M1", description: "Apple thinest laptop", price: 999, stock: 10}

const AppleDetail = () => {

    const [item, setItem] = useState({})

useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
},[])

const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( ITEM )
        }, 2000);
    })
}

  return (
    <div>
        <h1>Detalles del producto</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <AppleCount stock={item.stock}/>
    </div>
  )
}

export default AppleDetail