import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { shorten } from '../../helper/functions';
import trash from '../../assets/trash.svg';

const Cart = ({data}) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = data;

    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{shorten(title)}</h3>
                <span>{price}$</span>
            </div>
            <span>{quantity}</span>
            <div>
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