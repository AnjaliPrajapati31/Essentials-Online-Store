import React, { useContext } from 'react'
import { useFilterContext } from './Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
const {filterProducts,gridview}=useFilterContext();

if (gridview===true){
  return(
    <GridView products={filterProducts}/>
  )
}

if(gridview===false){
  return (
   <ListView products={filterProducts}/>
  )
}
}

export default ProductList