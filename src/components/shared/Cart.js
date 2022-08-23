import React, { useContext } from 'react';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trash from '../../assets/trash.svg';

// Style
import styles from "./Cart.module.css";

const Cart = ({data}) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <span>{price}$</span>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: 'DECREASE', payload: data})}>-</button> :
                    <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: data})}>
                        <img src={trash} alt='trash' style={{width: '20px'}} />
                    </button>
                }
                <button onClick={() => dispatch({type: 'INCREASE', payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;