import React, { useEffect } from "react";

// function BasketCount(props) {
//     return (
//         <div className="basket-count">
//             <h1 className="items-basket"> Basket</h1>
//             {props.basketCount} items
//         </div>
//     );
// }


const BasketCount= ({ basketCount, ... props }) => {
    useEffect (() => {
        let basketCountLabel = `Basket: ${basketCount} item` + (basketCount > 1 ? " " : "s" );
        document.title= basketCountLabel;
    });
    return (
        <span className="basketCount">
            {basketCount} item{basketCount !== 1? "s" : " "}
        </span>
    )
};
export default BasketCount;