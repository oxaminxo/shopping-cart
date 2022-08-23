import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../context/CartContextProvider";

// Component
import Cart from "./shared/Cart";

// Styles
import styles from "./ShopingCart.module.css";

const ShopingCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div>
        {state.itemCounter > 0 && (
          <div className={styles.payments}>
            <p>
              <span>Total items: </span>
              {state.itemCounter}
            </p>
            <p>
              <span>Total payment: </span> {state.total}$
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={styles.checkout}
                onClick={() => dispatch({ type: "CHECKOUT" })}
              >
                Checkout
              </button>
              <button
                className={styles.clear}
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {state.checkout && (
          <div className={styles.complete}>
            <h3>Checkout was successfully</h3>
            <Link to="/products">Buy more</Link>
          </div>
        )}

        {!state.checkout && state.itemCounter === 0 && (
          <div className={styles.complete}>
            <h3>Want to buy?</h3>
            <Link to="/products">Go back to shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopingCart;
