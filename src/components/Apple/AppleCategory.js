import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { AppleCount } from './AppleCount'

//const ITEM = {id: 1 , title:"Macbook Air M1", description: "Apple thinest laptop", price: 999, stock: 10}

const AppleDetail = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getItemDetail().then( res => {
            setItem(res)
            console.log(res)
        })
    },[ id ])
    
    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            const item = PRODUCTS.filter( p => p.category_id == id )
            setTimeout(() => {
                resolve( item )
            }, 500);
        })
    }

  return (
    <div>
        <h1>Hola</h1>
        {item.map(function(p){
            <div>
                <h1>Detalles del producto: { id }</h1>
                <li>{p.title}</li>
                <li><img src={p.img}/></li>
                <li>{p.description}</li>
                <li>{p.price}</li>
                <AppleCount stock={p.stock}/>
            </div>
        })}
    </div>
  )
}

export default AppleDetail