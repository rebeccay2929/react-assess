import React from "react";

function Product({ item, addToBasket, removeFromBasket }) {
  const {
    trackId,
    kind,
    trackName,
    artworkUrl100,
    artistName,
    trackPrice,
    shortDescription,
    inBasket,
  } = item;
  
  return (
    <div className="Product-box">
      <img src={artworkUrl100} alt={trackName} />
      <div className="Product-list">
        <h2> {trackName}</h2>
        <h3>{artistName}</h3>
        <h3> £{trackPrice}</h3>
        <h3> {kind}</h3>
        <h3>{shortDescription}</h3>
      </div>

      <div>
        {inBasket !== true ? (
          <button className = "btn" onClick={() => addToBasket(trackId)}> Add item </button>
        ) : (
          <button className = "btn" onClick={() => removeFromBasket(trackId)}>
            Remove item{" "}
          </button>
        )}
      </div>
    </div>
  );
}
export default Product;
