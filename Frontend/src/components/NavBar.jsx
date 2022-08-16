import React, { useState } from 'react'
import {FaSearch,FaShoppingCart,FaMoneyBill,FaHome,FaList} from 'react-icons/fa'
import './NavBar.scss'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'
function NavBar() {
    const [openlogin, setopenlogin] = useState(false)
    
    const loginformhandeler=()=>{
        setopenlogin(!openlogin)
    }
    return (
        <div className="NavCont">
            <div className="logo" title="Akibrot samuel Facebook">
                <h3>akiCommerse</h3>
            </div>
            <div className="search">
                <div className="searchcont">
                    <input type="text" name="" id="" placeholder="Search Anything"/><FaSearch className="Fasearch"/>
                </div>
            </div>
            <div className="right">
               <Link to="/"> <div className="Allproduct common"><h5>All Products</h5><FaList/></div></Link>
               <Link to="/cart"><div className="Cart common">
                   <h5>Cart</h5><FaShoppingCart/>
                   <div className="badge">
                       <h5>5</h5>
                   </div>
                   </div></Link>

               <Link to="/discounttoday"> <div className="Login common"><h5>Discount Today</h5><FaMoneyBill/></div></Link>
               <Link to="/login"> <div className="Login common"><h5>Register</h5><FaHome/></div></Link>
                <div className="Login common" onClick={loginformhandeler}><h5>Login</h5><FaHome/></div>
            </div>
            <LoginForm open={openlogin}/>
        </div>
    )
}

export default NavBar
