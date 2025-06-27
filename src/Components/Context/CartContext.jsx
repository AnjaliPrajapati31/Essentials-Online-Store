import { createContext, useEffect } from "react";
import { useContext,useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext=createContext()

const getLocalStorage=()=>{
    let newCartData=localStorage.getItem("cartData")
    if(newCartData==[]){
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
        dispatch({type:"CART_TOTAL_PRICE_ITEM"});
        localStorage.setItem("cartData",JSON.stringify(state.cart))
    },[state.cart])

    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREASE",payload:id})
    }

    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREASE",payload:id})
    }

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>
}

export const useCartContext=()=>{
    return useContext(CartContext)
}
