import React from "react";
import "./Cart.scss";

import SingleCart from "./SingleCart";
function Cart() {
  return (
    <div>
      <div className="CartCont">
        <div className="left">
          <SingleCart />
          <SingleCart />
          <SingleCart imgpath="../img/b41.jpg" />
        </div>
        <div className="right">
          <div className="paymentcont">
            <div className="left">
              <div className="title">
                <h4>Checkout</h4>
              </div>
              <div className="form">
                <div className="fname"></div>
                <div className="lname"></div>
                <div className="email"></div>
                <div className="phno"></div>
                <div className="title">
                  <h4>Payment Method Select one</h4>
                  <div className="cbe">
                  <h4>Cbe Bank</h4>
                    <input type="radio" name="pm" id=""/>
                  </div>
                  <div className="telebirr">
                    <h4>Telebirr</h4>
                    <input type="radio" name="pm" id="pm" />
                  </div>
                  <div className="cbebirr">
                    <h4>Cbe Birr</h4>
                    <input type="radio" name="pm" id="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
