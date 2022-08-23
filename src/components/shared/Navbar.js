import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Assets
import shopCart from "../../assets/shopping-cart.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopCart} style={{ width: "40px" }} alt="shopingCart" />
            <span>{state.itemCounter}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
