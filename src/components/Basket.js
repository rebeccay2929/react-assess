
import React from "react";
import Product from "./Product";

const Basket =({basket, ...props}) => {
    const {removeFromBasket} = props;
    return (
        <div>
            {!basket || basket.length === 0 ?(
                <div className="empty-basket"> Sorry, no items in basket.. </div>
            ) :(
                basket.map((item) => (
                    <div className="product" key={item.trackId}>
                        <Product 
                            item={item}
                            kind= {item.kind}
                            name ={item.trackName}
                            thumbnail={item.artworkUrl100}
                            artistName={item.artistName}
                            price={item.trackPrice}
                            description={item.shortDescription}
                            inBasket ={item.inBasket}  
                            removeFromBasket={removeFromBasket}
                            />
                            </div>
                ))
            )}
            
        </div>
    );
};




export default Basket;