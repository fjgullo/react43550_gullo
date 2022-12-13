import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { AppleCount } from './AppleCount'

//const ITEM = {id: 1 , title:"Macbook Air M1", description: "Apple thinest laptop", price: 999, stock: 10}

const AppleCategory = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getItemDetail().then( res => {
            setItem(res.filter(p => p.category_id == id))
        })
    },[id])
    
    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            const item = PRODUCTS
            setTimeout(() => {
                resolve(item)
            }, 500);
        })
    }
  return (
    <div className='flex flex-row justify-center flex-wrap'>
               {item && item.map(p => ( 
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-5">
            <img class="w-full" src={p.img} alt={`Imagen del producto $(title)`}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{p.title}</div>
              <p class="text-black-700 text-base">
              {p.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {p.price}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><AppleCount stock={p.stock}/></span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AppleCategory