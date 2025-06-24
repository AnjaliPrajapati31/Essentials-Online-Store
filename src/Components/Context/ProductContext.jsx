import React, { useEffect, useReducer } from 'react'
import { createContext ,useContext } from 'react'
import axios from "axios"
import reducer from "../Reducer/ProductReducer.jsx"

const AppContext=createContext()

const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    isSingleError:false,
    singleProduct:{},
}

const AppProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialState);
   
const getProduct= async (url)=>{
     dispatch({type:"SET_LOADING"})
  try {
      const res=await axios.get(url);
      const products=res.data;
       console.log("Fetched products:", products);
      dispatch({type:"SET_API_DATA" ,payload:products})
  }
  
   catch (error) {
    console.error("API Fetch Error:", error);
    dispatch({type:"API_ERROR"})
    
  }
};

const getSingleProduct=async (url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try{
        const res= await axios.get(url);
        const singleProduct=await res.data;
        dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
       
    }
    catch(error){
        dispatch({type:"SET_SINGLE_ERROR"})
    }
}
useEffect(()=>{
    getProduct(API);
},[]);

 return ( 
 <AppContext.Provider value={{...state , getSingleProduct}}>{children}</AppContext.Provider> 
)

}

//custom hooks
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};