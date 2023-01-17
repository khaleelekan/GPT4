import React from "react";
import './App.css'
import { Footer, Blog, Features, WhatGPT3, Header, Possibilty} from "./container";
import { Cta, Brand, Navbar, } from "./componenets";


const App = () =>{
    return(
<div className="App">
  <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>
  <Brand />
  <WhatGPT3 />
  <Features />
  <Possibilty />
  <Cta />
  <Blog />
  <Footer />
</div>
    )
}

export default App

