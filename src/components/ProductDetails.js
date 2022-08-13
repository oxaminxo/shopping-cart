import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// Context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = () => {

    const param = useParams();
    const data = useContext(ProductContext);
    const product = data[param.id - 1];
    const {title, price, description, category, image} = product;

    return (
        <div>
            <img src={image} alt='prodcutDetails' />
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>
                    <span>Category:</span> {category}
                </p>
                <div>
                    <span>{price}$</span>
                    <Link to='/prodcuts'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;