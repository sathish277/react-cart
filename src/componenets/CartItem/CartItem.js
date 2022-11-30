import React from "react";
import './CartItem.css';

const CartItem = (props)=> 
{
    const {price,title,qty,img}=props.product;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}  src={img}/>
            </div>
            <div className="right-block">
                <div>{title}</div>
                <div>Rs {price}</div>
                <div>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*buttons*/}
                    <img 
                        alt="increase"
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={()=>{props.onIncreaseQuanity(props.product)}}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3031/3031143.png" 
                        onClick={()=>{props.onDecreaseQuantity(props.product)}}
                    />
                    <img 
                        alt="deleteProduct" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/2984/2984959.png" 
                        onClick = {()=>{props.onDeleteProduct(props.product)}}
                    />
                </div>
            </div>

        </div>
    )
}


const styles={
    image:{
        height:110,
        width:90,
        background:'#ccc',
        borderRadius:4
    }
}

export default CartItem;