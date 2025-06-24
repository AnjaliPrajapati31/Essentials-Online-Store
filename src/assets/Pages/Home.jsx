import React from 'react'
import styled from 'styled-components'
import HeroSection from '../../Components/HeroSection'
import Services from '../../Components/Services'
import Trusted from '../../Components/Trusted'
import Features from '../../Components/Features'
import Product from '../../Components/Product'

const Home = () => { 
  const data="Essentials Online Store"
 
  return (
    <>
    <HeroSection myData={data}/>
    <Features/>
    <Services/>
    <Trusted/>
    </>
    
  )

 
}

export default Home