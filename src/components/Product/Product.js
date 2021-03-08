import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
        // console.log(props)
    const {img,name,seller,price,stock, key} = props.product;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4  className="Product-name"> <Link to={"/product/"+key}>{name}</Link> </h4>
                <a href="">{name}</a>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                { props.showAddToCart && <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
            </div>
        </div>
    );
};

export default Product;