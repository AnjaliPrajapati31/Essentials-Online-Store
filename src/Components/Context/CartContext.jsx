import { createContext, useEffect } from "react";
import { useContext,useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext=createContext()

const getLocalStorage=()=>{
    let newCartData=localStorage.getItem("cartData")
    if(!newCartData== []){
        return [];
    }
    else{
        return JSON.parse(newCartData)
    }
}

const initialState={
    cart:getLocalStorage(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000,
};

 export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const addToCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
        }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }
    useEffect(()=>{
        localStorage.setItem("cartData",JSON.stringify(state.cart))
    },[state.cart])

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>{children}</CartContext.Provider>
}

export const useCartContext=()=>{
    return useContext(CartContext)
}
