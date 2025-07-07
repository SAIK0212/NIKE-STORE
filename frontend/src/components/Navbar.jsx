import "../style/navbar.css";
import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    searchVisible,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
    setCartItems({});
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={assets.logoo} alt="Logo" className="navbar-logo" />
      </Link>

      <ul className="navbar-links">
        <NavLink className="navbar-link-item" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link-item" to="/collection">
          Collection
        </NavLink>
        <NavLink className="navbar-link-item" to="/about">
          About
        </NavLink>
        <NavLink className="navbar-link-item" to="/contact">
          Contact
        </NavLink>
      </ul>

      <div className="navbar-icons">
        {searchVisible && (
          <img
            src={assets.search_icon}
            alt="Search"
            className="icon"
            onClick={() => setShowSearch(true)}
          />
        )}

        <div className="profile-dropdown">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="icon"
            onClick={() => (token ? null : navigate("/login"))}
          />
          {token && (
            <div className="dropdown-menu">
              <p onClick={() => navigate("/account")}>My Profile</p>
              <p onClick={() => navigate("/orders")}>Orders</p>
              <p onClick={logout}>Logout</p>
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          <img src={assets.cart_icon} alt="Cart" className="icon" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>

        <img
          src={assets.menu_icon}
          alt="Menu"
          className="menu-icon"
          onClick={() => setVisible(true)}
        />
      </div>

      <div className={`mobile-sidebar ${visible ? "visible" : ""}`}>
        <div className="mobile-sidebar-menu">
          <div className="mobile-sidebar-back" onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} alt="Back" className="back-icon" />
            <p>Back</p>
          </div>
          {["/", "/collection", "/about", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className="mobile-sidebar-link"
              onClick={() => setVisible(false)}
            >
              {["Home", "Collection", "About", "Contact"][idx]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
