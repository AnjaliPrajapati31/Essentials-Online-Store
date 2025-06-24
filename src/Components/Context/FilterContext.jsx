import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import reducer from '../Reducer/filterReducer';

const FilterContext=createContext();

const initialState={
    filterProducts:[],
    allProducts:[],
    gridview:true,
    sortVal:"lowest",
    filters:{
      text:"",
      category:"all",
      company:"all",
      color:"all",
    }
}

export const FilterContextProvider = ({children}) => {
const {products}=useProductContext();
const [state,dispatch]=useReducer(reducer,initialState)

const setGridView=()=>{
  return dispatch({type:"SET_GRIDVIEW"});
}
const setListView=()=>{
  return dispatch({type:"SET_LISTVIEW"});
}

const sortingValue=(event)=>{
  let userValue=event.target.value;
  dispatch({type:"SET_SORTINGVALUE",payload:userValue})
}

const updateFilterValue=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
}

useEffect(()=>{
  dispatch({type:"FILTER_PRODUCTS"})
  dispatch({type:"SET_SORTING_DATA"})
},[products,state.sortVal,state.filters])

useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
},[products]);

  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sortingValue,updateFilterValue}}>{children}</FilterContext.Provider>
  )
}


export const useFilterContext=()=>{
    return useContext(FilterContext)
}
