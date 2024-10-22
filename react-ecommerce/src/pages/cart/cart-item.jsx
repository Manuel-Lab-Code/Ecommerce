import { React, useContext } from "react";

//import { Cart } from "./cart";

import { ShopContext, getTotalCartAmount } from "../../Context/Shop-Context";

export const CartItem = (props) => {
    const {id, productName, productimage, price} = props.data;
    const { addToCart, cartItems, removeFromCart, updateCartItemCount,  } = useContext(ShopContext);

    return(
        <div className="cartItems">
            <img className="img" src={productimage}/>

            <div className="description">
                <p><b>{productName}</b></p>
                <p className="price" > ${price}</p>
                <div className="countHandler">
                    <button onClick={()=> removeFromCart(id)}> - </button>
                    <input value={cartItems [id]} onChange={(e) => updateCartItemCount (Number (e.target.value), id)} />
                    <button onClick={()=> addToCart (id)}> + </button>
                </div>
            </div>
            
        </div>
        
    );
}