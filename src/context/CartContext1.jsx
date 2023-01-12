import { createContext, useContext, useState } from "react";

export const Contexto = createContext()

export const useCartContext = () => {
    const cartContext = useContext(Contexto)
    return cartContext
}

export const CartContext = ( { children }) => {

    const [cart, setCarrito] = useState([])

    const addNewProduct = (product, quantity) => {
        const newCart = [...cart, product]
        setCarrito(newCart)

    }

    const contextValue = {
        cart
    }

    return (
        <Contexto.Provider value={ {
            cart,
            addNewProduct
        }} >
           { children }
        </Contexto.Provider>
    )
}