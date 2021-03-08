import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart =props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0 ;
    if(total > 0){
        shipping = 12.99;
    }
    else if(total > 15){
        shipping = 4.99;
    }

    const tax = total / 10;
    const formatNumber= nums =>{
        const preh = nums.toFixed(2)
        return Number(preh)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered: {cart.length}</p>
            <p><small>Tax + Vat: {formatNumber(tax)}</small></p>
            <p><small>Shipping : {formatNumber(shipping)}</small></p>
            <p>Total Price:{formatNumber(total + tax + shipping)}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;