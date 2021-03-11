import React from "react";

import { useStateValue } from "../../StateProvider";
import RatingStar from "../RatingStar/RatingStar";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <RatingStar rating={rating} />
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
      <div className="checkoutProduct__price">
        <strong>${price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
