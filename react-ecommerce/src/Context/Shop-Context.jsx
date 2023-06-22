import { createContext, React, useState } from "react";
import Products from "../pages/Shop/products";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefualtCart = () =>{    //function that will get the array and create an empty object to represent the initial state of court itmes
        let Cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++)    //loopig through all of the items in a cart
    {   
        Cart[i] = 0;
    }
    return Cart;
};
// function to calculate the total Amount of product in the Cart
export const ShopContextProvider =(props) => {
const [cartItems, setCartItems] = useState (getDefualtCart());

const getTotalCartAmount =  () => {
    let totalAmount = 0;
    // loopig througt object
    for (const item in cartItems) {
        if (cartItems[item] > 0 ) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price
        }
    }
    return totalAmount;
};

                //add items id to carts
const addToCart = (itemId) => {     
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1 }))
                //add items id to carts end
};
                //remove from carts
const removeFromCart = (itemId) => {     
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
};
                //remove from carts end
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : newAmount}))
    }
    // const image = () =>{
    //     return (
    //         <div>
    //             <img src='https://picsum.photos/1500/80' />
    //         </div>
    //     )
    // };
                
    //passing the cart id into provider inorder to have access to it out side of the componet
const contextValue = {
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount, 
    getTotalCartAmount};

console.log(contextValue)

return (<ShopContext.Provider value={contextValue}>
    {props.children} 
    </ShopContext.Provider>
    );
};