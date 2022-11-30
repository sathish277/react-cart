import React from "react";
import CartItem from "../CartItem/CartItem";
import './Cart.css';


const Cart =(props)=>{
    const {products} = props;
    return (
        <div className="cart-items">
            {
                products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuanity={props.onIncreaseQuanity}
                            onDecreaseQuantity ={props.onDecreaseQuantity}
                            onDeleteProduct = {props.onDeleteProduct}
                        />
                    );
                })
            }
        </div>
        
    );
}



export default Cart;