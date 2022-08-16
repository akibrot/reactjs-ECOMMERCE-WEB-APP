import React, { useState } from "react";
import "./Cart.scss";
import img from "../img/b41.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";
function SingleCart({imgpath}) {
  const [quantity, setquantity] = useState(1);
  const intialp = 100;
  const [price, setprice] = useState(intialp);
  const decrementquantity = () => {
    if (quantity === 1) {
      setprice(intialp);
    } else setquantity(quantity - 1);
    var i;
    for (i = 0; i < quantity; i++) {
      if (quantity === 1) {
        return;
      } else setprice(price - intialp);
    }
  };
  const incrementquantity = () => {
    var i;
    setquantity(quantity + 1);
    for (i = 0; i < quantity; i++) {
      setprice(price + intialp);
    }
  };
  return (
    <div className="cartBox">
      <div className="left">
        <img src={imgpath} alt="" />
      </div>
      <div className="right">
        <div className="title">
          <p>black jaguar car</p>
          <h1>${price}</h1>
        </div>
        <div className="quantity">
          <div className="btns" onClick={incrementquantity}>
            <FaPlus />
          </div>
          <div className="display">{quantity}</div>
          <div className="btns" onClick={decrementquantity}>
            <FaMinus />
          </div>
        </div>
        <div className="delete">
          <h4>Remove from cart</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
