import React, { useEffect, useState } from 'react'
import PokeList from './PokeList'

export const PokeContainer = () => {

    const [count, setCount] = useState(0)
    const countHanlder = () => { setCount( c => c+1 ) }

    useEffect(() => {
        console.log('PokeContainer hizo render');
    })
    

  return (
    <>
    <div>PokeContainer</div>
    <button onClick={countHanlder}>Contador: {count}</button>
    <PokeList/>
    </>
  )
}
