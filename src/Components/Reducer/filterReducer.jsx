const filterReducer=(state,action)=>{

    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            let priceArray=action.payload.map((currElem)=>currElem.price)

            let maxPrice=Math.max(...priceArray)
            console.log(maxPrice)
            return{
                ...state,
                filterProducts:[...action.payload],
                allProducts:[...action.payload],
                filters:{...state.filters,maxPrice,price:maxPrice},
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
                filterProducts: newSortedProduct,
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
             
           const {text,category,company,color ,price}=state.filters;

           if(text){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                return currelem.name.toLowerCase().includes(text)
            })
           }
           
           if(category!="all"){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                 return currelem.category===category
            })
           }

           if(company!="all"){
             tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                 return currelem.company.toLowerCase() === company.toLowerCase()
            })
           }

           if (color!="all"){
            tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                 return currelem.colors.includes(color)        
            })
           }

           if(price==0){
             tempFilterProduct=tempFilterProduct.filter((currelem)=>{
                    return currelem.price ==price
           })
        }else{
            tempFilterProduct=tempFilterProduct.filter((currElem)=>{
                    return currElem.price <=price
            })
        }

           return{
            ...state,
            filterProducts:tempFilterProduct,
           }

           case "CLEAR_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                      text:"",
                      category:"all",
                      company:"all",
                      color:"all",
                      maxPrice:6000000,
                      price:state.filters.maxPrice,
                      minPrice:0
                }
            }

        default:
            return {
                ...state
            }
    }

}
export default filterReducer;