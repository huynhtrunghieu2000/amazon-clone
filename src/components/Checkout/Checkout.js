import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Product from "../Product/Product";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket }] = useStateValue();
  const totalPrice = basket.reduce((price, item) => item.price + price, 0);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__left__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <p className="checkout__priceColumn">Price</p>
        </div>
        <FlipMove
          className="checkout__item"
          leaveAnimation={"accordionVertical"}
          duration={400}
          easing="linear"
        >
          {basket.map((item) => (
            <div key={item.id}>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            </div>
          ))}
          <div className="checkout__left__footer">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket?.length} items):{" "}
                    <strong>{`${value}`}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </FlipMove>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
