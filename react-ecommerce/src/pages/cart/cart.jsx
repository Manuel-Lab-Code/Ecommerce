import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../Context/Shop-Context";
import "./cart.css";
import { CartItem } from "./cart-item"; 
import { useNavigate } from "react-router-dom";


export function Cart() {
    const { addToCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount ( );
    const navigate = useNavigate ()
    return (
        <div className="cart">
             {/* <img src='https://picsum.photos/1500/80' /> */}
                <h1>Your Cart Items</h1>
            
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            {totalAmount > 0 ?
                <div className="checkout">
                  
                <p><b>Subtotal: ${totalAmount}</b></p>
                <button onClick={() => navigate("/")}>Continue Shoppig</button>
                <button>Checkout</button>
                
            </div>
                : <h3> Your Cart is Empty </h3>}
            </div>
            
        </div>

        
    );


}
