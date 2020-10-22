import React from "react";
import "./style.css";


function Nav() {
    return(
    <ul className="menu">
        <li><a href="/home"><i className="fi-list"></i> <span>Home</span></a></li>
        <li><a href="/Journal"><i className="fi-list"></i> <span>Journal</span></a></li>
        <li><a href="/Gallery"><i className="fi-list"></i> <span>Gallery</span></a></li>
        <li><a href="/Registeries"><i className="fi-list"></i> <span>Registeries</span></a></li>
        <li><a href="/"><i className="fi-list"></i><span>Logout</span></a></li> 
    </ul>
    );
}

export default Nav;
