import React from 'react'

const CartReducer = (state,action) => {
  if(action.type=="ADD_TO_CART"){
     let {id,color,amount,product}=action.payload;
      
     let cartProduct;
     cartProduct={
        id:id+color,
        color,
        name:product.name,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,
     }
     
     return{
        ...state,
        cart:[...state.cart,cartProduct],
        
     }
   
  }
  if(action.type=="REMOVE_ITEM"){
   let updatedCart=state.cart.filter((currItem)=>
   currItem.id !== action.payload)

   return{
      ...state,
      cart:updatedCart,
   }
  }

  if(action.type=="CLEAR_CART"){
   return{
      ...state,
      cart:[],
   }
  }

  return state;

}

export default CartReducer