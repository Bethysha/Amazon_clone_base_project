import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import classes from "./Header.module.css"

function LowerHeader() {
  return (
    <div className={classes.lower_container}>



        <ul>
        <li>
            <IoMenuOutline />
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift cards</li>
        <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader