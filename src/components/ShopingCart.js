import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopingCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            <div>
                {
                    state.itemCounter > 0 &&
                    <div>
                        <p><span>Total items: </span>{state.itemCounter}</p>
                        <p><span>Total payment: </span>{state.total}$</p>
                        <div>
                            <button onClick={() => dispatch({type: 'CHECKOUT'})}>Checkout</button>
                            <button onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
                        </div>
                    </div>
                }

                {
                    state.checkout &&
                    <div>
                        <h3>Checkout was successfully</h3>
                        <Link to='/products'>Buy more</Link>
                    </div>
                }

                {
                    !state.checkout && state.itemCounter === 0 &&
                    <div>
                        <h3>Want to buy?</h3>
                        <Link to='/products'>Go back to shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopingCart;