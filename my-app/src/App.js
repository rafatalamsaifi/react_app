
// import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Service from "./Component/Service/Service";
import Footer from "./Component/Footer/Footer"


const App = () => {
  return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="service" element={<Service />} />
            </Route>
          </Routes>
        </BrowserRouter>
       

        <Footer />
      </>
  );
};

export default App;
