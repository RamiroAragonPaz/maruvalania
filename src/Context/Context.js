import React from 'react';
import { createContext, useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({children}) => {

    const [addedToCart, setAddedToCart] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [currCategory, setCurrCategory] = useState("")

    const addProducts = (product) => {
        let duplicado = cartProducts.find(cartProduct => cartProduct.productId === product.productId)
        if (!duplicado) {
            alert("Producto Agregado al carrito!")
            setCartProducts(cartProducts =>[...cartProducts, product]);    
            setTotalPrice(totalPrice + (Number(product.price)))
        } 
    } 



    const removeProducts = (product) => {
        setTotalPrice(totalPrice - (Number(product.price)));
        setCartProducts(cartProducts.filter((cartProduct) => {
            return cartProduct.id !== product.id
        }))
        
    }

    const data = {
        addProducts,
        removeProducts,
        setSelectedProduct,
        selectedProduct,
        cartProducts,
        totalPrice,
        setCurrCategory,
        currCategory
    }

    return (
        <Context.Provider value={data} > 
            {children}
        </Context.Provider>
    )
}

export { ContextProvider }

