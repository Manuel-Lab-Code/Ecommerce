import { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";

const Products = (props) =>{
    // Listing out the obeject List from project.js into Products.jsx through props
    const {id, productName, productimage, price} = props.data;   

    const { addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems [id]
    return (
    <div className="product"> 
        <img src={productimage} />

        <div className="discription">
         <p><b> {productName} </b></p>
           <p> ${price} </p>
        </div>

        <button className="addToCartBttn" onClick={ () => addToCart (id)}>
            Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} 
        </button>
   
    </div>
    )
}
export default Products;