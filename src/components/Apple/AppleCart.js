import { useContext } from 'react'
import { CartContext, useCart } from '../../context/cartContext'

const AppleCart = () => {

    const { items, clearCart } = useCart()

    //CON RETURN
    // if ( items.length = 0) {
    //     return <h1 className='text-xl m-10'>Agregá items a tu carrito</h1>
    // }

  return (
    <div className='m-10 text-xl'>
    <div>AppleCart</div>
    { /* CON && */ }
    { /* { items.length == 0 && <h1 className='text-xl m-10'>Agregá items a tu carrito</h1> } */ }
    { items.length == 0 ?
        <h1 className='text-xl m-10'>Agregá items a tu carrito</h1>
        :
        <h1>Estos son tus productos:</h1>
    } 
    <div>{ items.map ( i => <li key={i}>{i}</li>) }</div>
    <button className='btn' onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
} 

export default AppleCart