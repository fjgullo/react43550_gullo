import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext, useCart } from '../../context/cartContext'

const AppleCart = () => {

    const { items, clearCart } = useCart()

    //CON RETURN
    // if ( items.length = 0) {
    //     return <h1 className='text-xl m-10'>Agregá items a tu carrito</h1>
    // }

    const makeOrder = () => { 
      const user = {name:'Elon', phone: 1805498269, email: 'elon@gmail.com'}
      const order = {
        buyer: user,
        items: items
      }
      console.log('Levantando la order:', order)
      saveOrder( order )
     }

     const saveOrder = async ( order ) => { 
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      const id = await addDoc( orderCollection, order)
      console.log('Nueva orden: ',id)
      }

      const editOrder = ( id ) => {
        const db = getFirestore()
        const orderDoc = doc('orders', id)
        updateDoc(orderDoc, 
          {buyer: {
            name:'Elon', 
            phone: 1805498269, 
            email: 'elon@gmail.com'}
          }).then( res => console.log )
      }

  return (
    <div className='m-10 text-xl'>
    <div>AppleCart</div>
    { /* CON && */ }
    { /* { items.length == 0 && <h1 className='text-xl m-10'>Agregá items a tu carrito</h1> } */ }
    { items.length === 0 ?
        <h1 className='text-xl m-10'>Agregá items a tu carrito</h1>
        :
        <h1>Estos son tus productos:</h1>
    } 
    <div>{ items.map ( i => <li key={i}>{i}</li>) }</div>
    <button className='btn' onClick={clearCart}>Vaciar carrito</button>
    <button className='btn' onClick={makeOrder}>Comprar</button>
    </div>
  )
} 

export default AppleCart