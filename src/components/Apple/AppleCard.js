import React from 'react'
import { Link } from 'react-router-dom'

export const AppleCard = ( {id, title, description, price, stock}) => {
  return (
    <div className='m-5 p-5 bg-gray-100'>
        <div>{title}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{stock}</div>
        <Link to={`/items/${id}`} className='btn'>Ver Detalle</Link>
    </div>
  )
}
