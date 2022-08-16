import React from 'react'
import {FaMoneyBill,FaHornbill} from 'react-icons/fa'
import { Link } from "react-router-dom";
function Product() {
const data="send from products"

    return (
        <div className="box">
        <div className="top">
          <img src="../../public/images/p1.jpg" alt="" />
        </div>
        <div className="bottom">
            <div className="button">
               <h4>Buy</h4><FaMoneyBill className="icons"/>
            </div>
            <div className="dsc">
                <Link to={{pathname:`/productdetails/${1}`,state:{data}}}><div className="dsc1">
                <h4>Discription</h4><FaHornbill className="icons"/></div></Link>
            </div>
            <div className="price">
            <div className="btncont"><h4>$1234</h4></div>
            </div>
        </div>
      </div>
    )
}

export default Product
