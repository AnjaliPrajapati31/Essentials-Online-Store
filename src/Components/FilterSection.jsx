import React from "react";
import styled from "styled-components";
import { useFilterContext } from "./Context/FilterContext";
import { FaCheck } from 'react-icons/fa';
import FormatPrice from "../Helper/FormatPrice"
import {Button} from '../Components/Button'

const FilterSection = () => {
  const {
    updateFilterValue,
    filters: { text, category, company, color,price,minPrice,maxPrice},
    allProducts,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    if (property === "colors") {
      newVal = newVal.flat();
    }
    const unique = ["all", ...new Set(newVal)];
    return unique;
  }; 

  const categoryOnlyData = getUniqueData(allProducts, "category");
  const companyOnlyData = getUniqueData(allProducts, "company");
  const colorOnlyData = getUniqueData(allProducts, "colors");

  return (
    <Wrapper>
      <div className="filter-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search"
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={currElem}
                onClick={updateFilterValue}
                className={currElem === category ? "active" : ""}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <div>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onClick={updateFilterValue}
            >
              {companyOnlyData.map((currElem, index) => {
                return (
                  <option key={index} value={currElem} name="company">
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div> 

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorOnlyData.map((currColor, index) => {
            if (currColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  value={currColor}
                  onClick={updateFilterValue}
                  className="color-all--style"
                >all
                </button>
              );
            } 
            else{
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  value={currColor}
                  className={color===currColor?"btnStyle active":"btnStyle"}
                  style={{ backgroundColor: currColor }}
                  onClick={updateFilterValue}
                >
                  {color === currColor ? <FaCheck className="checkStyle"/>: null}
                </button>
              );
            }
              
            })}
          
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p><FormatPrice price={price}/></p>
        <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={updateFilterValue}/>
      </div>

      <div className="filter-clear">
            <Button className="btn" onClick={clearFilters}>Clear Filter</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
