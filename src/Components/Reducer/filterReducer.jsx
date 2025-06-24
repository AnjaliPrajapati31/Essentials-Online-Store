const filterReducer=(state,action)=>{

    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filterProducts:[...action.payload],
                allProducts:[...action.payload],
            }
        
        case "SET_GRIDVIEW":
            return{
                ...state,
                gridview:true,
            }
        
        case "SET_LISTVIEW":
            return{
                ...state,
                gridview:false,
            }
        
        case "SET_SORTINGVALUE":
            // let userValue=document.getElementById("sort")
            // let sortValue=userValue.options[userValue.selectedIndex].value;
            return{
                ...state,
                sortVal:action.payload,
            }

        case "SET_SORTING_DATA":
            const {filterProducts,sortVal}=state
            let tempSortedProduct=[...filterProducts]
            const sortingProducts=(a,b)=>{
                if(sortVal==="a-z"){ 
                    return a.name.localeCompare(b.name);
                } 
                if(sortVal==="z-a"){
                    return b.name.localeCompare(a.name)
                } 
                if(sortVal==="lowest"){ 
                     return a.price-b.price;
                } 
                if(sortVal==="highest"){
                    return b.price-a.price;
                }
            }
            let newSortedProduct;
                
            newSortedProduct=tempSortedProduct.sort(sortingProducts)
            


            return{
                ...state,
                filterProducts:newSortedProduct,
            }

        case "UPDATE_FILTER_VALUE":
            const{name,value}=action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                     [name]:value
                }
            }
        case "FILTER_PRODUCTS":
           let {allProducts}=state;
           let tempFilterProduct=[...allProducts]
             
           const {text,category,company,color}=state.filters;

           if(text){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                return currelem.name.toLowerCase().includes(text)
            })
           }
           
           if(category!="all"){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                currelem.category===category
            })
           }

           if(company!="all"){
             tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                return currelem.company.toLowerCase() === company.toLowerCase()
            })
           }

           if (color){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                return currelem.colors.includes(color)        
            })
           }


           return{
            ...state,
            filterProducts:tempFilterProduct,
           }

        default:
            return {
                ...state
            }
    }

}
export default filterReducer;