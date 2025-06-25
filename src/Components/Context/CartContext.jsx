import { createContext } from "react";
import { useContext,useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext=createContext()

const initialState={
    cart:[],
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

    return <CartContext.Provider value={{...state,addToCart,removeItem}}>{children}</CartContext.Provider>
}

export const useCartContext=()=>{
    return useContext(CartContext)
}
