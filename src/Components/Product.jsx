import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helper/FormatPrice';


const Product = (currElem) => {
const {id,name,image,price,category}=currElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                <div className="grid grid-two-column">
                    <h3>{name}</h3>
                    <p className='card-data--price'>{<FormatPrice price={price}/>}</p>
                </div></div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product;