import React from 'react'
import { Link } from 'react-router-dom'

export const AppleCard = ( {id, title, description, price, stock, img,}) => {
  return (

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-5">
  <img class="w-full" src={img} alt={`Imagen del producto $(title)`}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-black-700 text-base">
    {description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {price}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stock: {stock}</span>
    <span><Link to={`/items/${id}`} className='btn'>View Detail</Link></span>
  </div>
</div>

  )
}
