import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Context
import { ProductContext } from "../context/ProductContextProvider";

// Styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const param = useParams();
  const data = useContext(ProductContext);
  const product = data[param.id - 1];
  const { title, price, description, category, image } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="prodcutDetails" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>Category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price}$</span>
          <Link to="/prodcuts">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
