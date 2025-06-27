import React, { use } from 'react'
import FormatPrice from '../Helper/FormatPrice'
import CartAmtToggle from './CartAmtToggle'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import { useCartContext } from './Context/CartContext'

const CartItem = ({id,name,image,amount,color,price}) => {
const {removeItem,setDecrease,setIncrease}=useCartContext()

  return (
    
    <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={name}/>
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>Color:</p>
                    <div className="color-style" style={{backgroundColor:color,color:color}}></div>
                </div>
            </div>
        </div>

        <div className='cart-hide'>
            <p>
              <FormatPrice price={price}/>  
            </p>    
        </div>
         <CartAmtToggle amount={amount} setIncrease={()=>setIncrease(id)} setDecrease={()=>setDecrease(id)}/>
        
        <div className="cart-hide">
            <p>
                <FormatPrice price={price*amount}/>
            </p>
        </div>
        <div>
            <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
        </div>
    </div>

       
    
       
  )
}

export default CartItem;