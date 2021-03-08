import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, key,price} = props.product;
    return (
        <div className="itam-container">
            <h4>{name}</h4>
            <p>quantity : {quantity}</p>
            <h6>Price: {price}</h6>
            <button onClick={()=>props.removeProduct(key)} className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;