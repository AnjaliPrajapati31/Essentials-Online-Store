import React from 'react'

const CartReducer = (state,action) => {
  if(action.type=="ADD_TO_CART"){
     let {id,color,amount,product}=action.payload;

     let existingProduct=state.cart.find((currelem)=>{
      return currelem.id===id+color; 
     })

     if(existingProduct){
       let updatedProduct=state.cart.map((currelem)=>{
         if(currelem.id===id+color){
            let newAmount=currelem.amount + amount
            if(newAmount>=currelem.max){
               newAmount=currelem.max;
            }
         return{
            ...currelem,
            amount:newAmount,
         };
         }
         else{
            return currelem;
         }
       
       })  
       return{
        ...state,
        cart:updatedProduct,
         }
     }
     else{
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
  }

  if(action.type==="SET_DECREASE"){
   let updatedProduct=state.cart.map((currelem)=>{
      if(currelem.id===action.payload){
         let decAmount=currelem.amount-1
         if(decAmount<=1){
            decAmount=1
         }
         return{
            ...currelem,
            amount:decAmount,
         }
      }else{
         return currelem
      }
     
   }) 
   return{
         ...state,
         cart:updatedProduct
      }
  }

  if(action.type==="SET_INCREASE"){
   let updatedProduct=state.cart.map((currelem)=>{
      if(currelem.id===action.payload){
         let incAmount=currelem.amount+1
         if(incAmount>=currelem.max){
            incAmount=currelem.max
         }
         return{
            ...currelem,
            amount:incAmount,
         }
      }else{
         return currelem
      }
     
     
   }) 
   return{
         ...state,
         cart:updatedProduct
      }
  }

  if(action.type==="REMOVE_ITEM"){
   let updatedCart=state.cart.filter((currItem)=>
   currItem.id !== action.payload)

   return{
      ...state,
      cart:updatedCart,
   }
  }

//   if(action.type=="CART_TOTAL_ITEM"){
//    let updatedItemVal=state.cart.reduce((initialVal,currelem)=>{
//       let{amount} = currelem;
//       initialVal = initialVal + amount;
//       return initialVal;
//    },0)
//     return {
//       ...state,
//       total_item:updatedItemVal,
//    }
//   }

//   if(action.type=="TOTAL_PRICE"){
//    let total_price=state.cart.reduce((initialState,currElem)=>{
//       let {price,amount}=currElem;
//       initialState=initialState + price *amount;
//       return initialState
//    },0)
//       return{
//          ...state,
//          total_price,
//       }
//   }

  if (action.type=="CART_TOTAL_PRICE_ITEM") {
   let {total_item,total_price}=state.cart.reduce((acumm,currElem)=>{
      let {price,amount}=currElem;
      acumm.total_item += amount;
      acumm.total_price += price*amount
      return acumm;
   },{
      total_item:0,
      total_price:0,
   })
   return{
      ...state,
      total_item,
      total_price,
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