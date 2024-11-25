import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Carresrs from "./components/Carresrs"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Products from "./components/Products"
import ApplyForm from "./components/ApplyForm"

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="https://sgco-website.onrender.com//about" element = {<About />}/>
          <Route path="/career" element = {<Carresrs />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/signup" element = {<Signup />}/>
          <Route path="/signin" element = {<Signin />}/>
          <Route path="/products" element = {<Products />}/>
          <Route path="/apply-form" element = {<ApplyForm />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
