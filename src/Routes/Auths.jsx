import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import About from '../components/About'
import Entrance from '../components/Entrance'
import FrontPg from '../components/FrontPg'
import Prices from '../components/Prices'
import WhyUs from '../components/WhyUs'


const Auths = () => {
  return (
    <div>


      <BrowserRouter>

        <Routes>

        <Route index element={<Home />}></Route>
        <Route path="/lyftgym/" element={<Home />}></Route>
        <Route path="/lyftgym/front" element={<FrontPg />}></Route>
          <Route path="/lyftgym/about" element={<About />}></Route>
          <Route path="/lyftgym/whyUs" element={<WhyUs />}></Route>
          <Route path="/lyftgym/prices" element={<Prices />}></Route>
          <Route path="/lyftgym/entrance" element={<Entrance />}></Route>
          {/* <Route path="*" element={<PageNotFound />}></Route> */}


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auths