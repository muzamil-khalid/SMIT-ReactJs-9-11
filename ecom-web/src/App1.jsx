import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Contact from "./Contact.js";
import { useState } from "react";
// import React from 'react'


function App() {
  // const [count,setCount] = useState(0)
  // const count = 0
  const myName = "Ahmed"

  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Home/>}/>
    //       <Route path="/about" element={<About/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
    //   </Routes>
    // </BrowserRouter>
    <>
    <h1>Count value {myName}</h1>
    </>

  );
}

export default App;
