import React, { useEffect } from "react";
import "../../stylesheets/Navbar.scss";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import LoginModel from "../LoginModel/LoginModel";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CiShop } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assests/images/flipkartlogo.svg";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import { CarouselData } from "../../Components/Datas";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              // src={Logo}
              alt="Flipcartlogo"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for Products,brands and more"
              className="navbar-searchbox"
            />
            <button className="searchbtn">
              <IoSearch />
            </button>
          </div>

          <div className="login-wrap">
            <h3 className="navbar-btn" onClick={() => setIsopen(true)}>
              <FaUserCircle style={{ height: "23px", width: "23px" }} />
              Login
            </h3>
          </div>

          <div className="navbar-cart">
            <div className="cart-icon">
              <FaShoppingCart />
            </div>
            <Link to={"/cart"} className="cart">
              Cart
            </Link>
          </div>

          <div className="seller-wrap">
            <CiShop style={{ height: "23px", width: "23px" }} />
            <h6>Become a Seller</h6>
          </div>
        </div>
        <LoginModel isopen={isopen} setClose={setIsopen} />

        
      </div>
    </>
  );
};

export default Navbar;
