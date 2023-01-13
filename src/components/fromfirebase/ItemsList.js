import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

const ItemsList = () => {

const [item, setItem] = useState()
const [items, setItems] = useState([])

useEffect(() => {
  getItemData()
  getItems()
}, [])

const getItemData = () => { 
    const db = getFirestore()
    const docRef = doc (db, 'items', 'IWjTvQSDbt4FmdV2wM2c')
    getDoc( docRef ).then( snapshot => {
        setItem( { id: snapshot.id, ...snapshot.data()} );
    })
 }

 const getItems = async () => { 
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    const snapshot = await getDocs( collectionRef )
    setItems( snapshot.docs.map ( d => ( { id:d.id, ...d.data() } ) ));
 }

  return (
    <div className='text-xl m-10'>
        <h1>Listado de productos</h1>
        { item &&
          <>
            <h2>Producto destacado:</h2>
            <p>{item.title} - stock: {item.stock}</p>
          </>
        }

        {items.map( i => <li key={i.id}g>{i.title} - {i.price} - stock {i.stock} </li>)}
        
   </div>
  )
}

export default ItemsList
