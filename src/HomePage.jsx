import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./home"
import Product from "./Components/products/products"
import Accounts from "./Components/accounts/Accounts"
import Cart from "./Components/cart/cart"
import Footer from "./Components/Footer"
import ProductsDetails from "./Components/productsDetail"
import About from "./About"


function HomePage() {

  return (
    <>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/productdet/:id" element= {<ProductsDetails/>} />
            <Route path="/About" element={<About/>}></Route>
          </Routes>
          
        </BrowserRouter>
        <Footer/>
    </>
  );
};

export default HomePage;
