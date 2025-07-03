import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Products from './assets/Pages/Products'
import Cart from './assets/Pages/Cart'
import Contact from './assets/Pages/Contact'
import SingleProduct from './assets/Pages/SingleProduct'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import ErrorPage from './assets/Pages/ErrorPage'
import { GlobalStyles } from './assets/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App=() =>{

  const theme={
     colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  

  return(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <GlobalStyles/>
  <Header/>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct></SingleProduct>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/login" element={<SignIn/>}></Route>
    <Route path="/register" element={<SignUp/>}></Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </ThemeProvider>
  )
  

}

export default App
