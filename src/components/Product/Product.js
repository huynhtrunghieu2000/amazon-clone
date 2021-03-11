import React from "react";
import "./Product.css";

import { useStateValue } from "../../StateProvider";
import RatingStar from "../RatingStar/RatingStar";

function Product({ id, title, image, price, rating }) {
  // Create an action (Redux)
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  //Render
  return (
    <div className="product hvr-grow">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <RatingStar rating={rating} />
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
