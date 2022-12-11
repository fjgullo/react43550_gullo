import {useEffect, useState} from 'react'
import { AppleCard } from './AppleCard'

const PRODUCTS = [
    {id: 1 , title:"Macbook Air M1", description: "Apple thinest laptop", price: 999, stock: 10},
    {id: 2 , title:"Macbook Air M2", description: "Apple thinest laptop", price: 999, stock: 40},
    {id: 3 , title:"Macbook PRO 13", description: "Apple thinest laptop", price: 1200, stock: 15},
    {id: 4 , title:"Macbook PRO 15", description: "Apple thinest laptop", price: 1600, stock: 60},
]

const AppleList = () => {

    const [items, setItems] = useState([])

        useEffect ( () => {
            getProducts() 
                .then( res => {
                    console.log(res);
                    setItems( res )
            })
            .catch( err => {console.log(err) })
        }, [])

        const getProducts = () => {
            return new Promise(  (resolve, reject) => {
                setTimeout( () => {
                    resolve(PRODUCTS)
                }, 2000);
            })
        }


    return (
        <div>
            { items.map( i => <AppleCard key={i.id} {...i}/>) }
        </div>
    )
}

export default AppleList