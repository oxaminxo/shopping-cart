import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

// Assets
import shopCart from '../../assets/shopping-cart.svg';

// Context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <Link to='/products'>Products</Link>
            <div>
                <Link to='/cart'>
                    <img src={shopCart} style={{width: '40px'}} alt='shopingCart' />
                    <span>{state.itemCounter}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;