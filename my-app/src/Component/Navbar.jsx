// import React from "react";
// import { Outlet, Link } from "react-router-dom";

// const Navbar = ()=>{
//     return(
//         <>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contactus">ContactUs</Link></li>
//                 </ul>
//             </nav>

//             <Outlet/>
//         </>
//     )
// }

// export default Navbar;



import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = ()=> {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    );
};

export default Navbar