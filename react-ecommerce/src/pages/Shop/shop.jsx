import React from "react";
// import { image } from "../../Context/Shop-Context";

import { PRODUCTS } from "../../product";
import "./shop.css";
import Products from "./products";

export const Shop = () => {
    return (
        
        <div className="shop">
             {/* <img src='https://picsum.photos/1500/80' />        */}
             <div className="shopTitle">
                
            <h1>Shop Product</h1>
            </div>
        {/* Mapping out products needed to the shop from the product.js */}
        <div className="products"> 
        {PRODUCTS.map((product)=>(
                <Products data={product}/>

            )) }
        </div>
    </div>
    )


};