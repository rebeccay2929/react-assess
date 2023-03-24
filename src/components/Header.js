import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    // style= {list-style-type: none;}
    return(
<div className="Header">
    <ul  className="Nav-list no-bullets" >
        <li>
            <Link to="/" id="homepage-link" className="List"> 
            Home</Link>
        </li>

        <li>
            <Link to="/about" id="aboutpage-link" className="=List">
                About 
            </Link>
        </li>

        <li>
            <Link to="/basket" id="basket-link" className="List">
                Basket: {props.itemCount} items
            </Link>
        </li>
    </ul>
</div>
    );
}
export default Header;