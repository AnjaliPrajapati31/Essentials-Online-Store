import React from 'react'
import FilterSection from '../../Components/FilterSection'
import Sort from '../../Components/Sort'
import ProductList from '../../Components/ProductList'
import styled from 'styled-components'

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection/>
        </div>

        <section className='product-view--sort'>
          <div className="sort-filter">
            <Sort/>
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


export default Products