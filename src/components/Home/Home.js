import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="121"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={2.9}
          />
          <Product
            id="122"
            title="Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={899.99}
            image="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg"
            rating={4.1}
          />
        </div>
        <div className="home__row">
          <Product
            id="124"
            title="AmazonBasics Lightning to USB A Cable, Apple MFi Certified, White, 6 Feet /1.8 Meters, 24-Pack"
            price={82.95}
            image="https://m.media-amazon.com/images/I/71Ydjgub8-L._AC_UY218_.jpg"
            rating={4.1}
          />
          <Product
            id="125"
            title="Elite Series 2 Controller - Black"
            price={152.89}
            rating={4.3}
            image="https://images-na.ssl-images-amazon.com/images/I/41axyW2jpfL._AC_US218_.jpg"
          />
          <Product
            id="123"
            title="Controller Gear Officially Licensed Star Wars Jedi: Fallen Order - Gold and Black Jedi Hat"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41pVH+S-z0L._AC_US218_.jpg"
            rating={4.5}
          />
        </div>
        <div className="home__row">
          <Product
            id="126"
            title="Turtle Beach - Ear Force Recon 50P Stereo Gaming Headset - PS4 and Xbox One (compatible w/ Xbox One controller w/ 3.5mm Headset Jack)"
            price={24.95}
            rating={4.4}
            image="https://images-na.ssl-images-amazon.com/images/I/41c6gKlbUvL._AC_US218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
