import React, { useContext } from 'react'
import HeroSection from '../../Components/HeroSection'
import { useProductContext } from '../../Components/Context/ProductContext';

const About = () => {
  const myName=useProductContext();
  const data="Essentials Ecommerce"
  return (
    <> {myName}<HeroSection myData={data}/></>
   
  )
}

export default About