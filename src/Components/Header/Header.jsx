import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {


  const [{basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  


  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivery to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <FaSearch size={25} />
          </div>
          {/* other section*/}
          <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span> {totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
