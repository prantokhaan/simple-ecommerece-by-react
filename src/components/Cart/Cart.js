import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let items = 0;
    let shipping = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        items = items + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const totalBeforeTax = items + shipping;
    const tax = (items + shipping) / 10;
    const orderTotal = items + shipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h5>Items Ordered: {totalQuantity}</h5>
            <div className="cart-grid">
            <div className="cart-name">
                <hr />
                <p>Items:</p>
                <hr />
                <p>Shipping:</p>
                <hr />
                <p>Total Before Tax:</p>
                <hr />
                <p>Estimated Tax:</p>
                <hr />
                <h3 className="order-total">Order Total:</h3>
                <hr />
            </div>
            <div className="cart-price">
                <hr />
                <p>${items.toFixed(2)}</p>
                <hr />
                <p>${shipping.toFixed(2)}</p>
                <hr />
                <p>${totalBeforeTax.toFixed(2)}</p>
                <hr />
                <p>${tax.toFixed(2)}</p>
                <hr />
                <h3 className="totalPrice">${orderTotal.toFixed(2)}</h3>
                <hr />
            </div>
            </div>
            <button className="orderReviewButton">Review Your Order</button>
        </div>
    );
};

export default Cart;