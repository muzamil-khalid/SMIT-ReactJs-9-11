import React from "react";
import { Link } from "react-router-dom";

// export const Header = () =>{
//     return(
//         <>
//             <h1>Header</h1>
//         </>
//     )
// }
// export const HeaderTwo = () =>{
//     return(
//         <>
//             <h1>Header Two</h1>
//         </>
//     )
// }


const Header = () =>{
    return(
        <div>
            <div>
                <h1>Logo</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header
