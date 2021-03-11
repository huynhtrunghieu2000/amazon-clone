import React from "react";
import ScrollToTop from "react-scroll-up";
import "./Footer.css";
function Footer() {
  const style = {
    position: "static",
    "background-color": "rgb(55, 71, 90)",
    color: "white",
    padding: 13,
    "margin-top": 50,
    display: "flex",
    "justify-content": "center",
    cursor: "pointer",
  };
  return (
    <div className="footer">
      <div className="footer__backToTop">
        <ScrollToTop showUnder={100} style={style}>
          <p>Back to top</p>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default Footer;
