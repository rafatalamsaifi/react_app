// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Navbar from "./Component/Navbar"
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Contactus from "./Component/ContactUs"
// const App = ()=>{
//   return(
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route  path="/" element={<Navbar />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="contactus" element={<Contactus />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;



import React from "React";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {
  return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;
