import {useEffect, useState} from 'react'
import { PRODUCTS } from '../../data/products'
import { AppleCard } from './AppleCard'

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
        <div className='flex flex-row justify-center flex-wrap'>
            { items.map( i => <AppleCard key={i.id} {...i}/>) }
        </div>
    )
}

export default AppleList