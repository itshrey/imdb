import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
    const {gettotalamount} = useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className="cart-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cart-format cart-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}
                                </button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} className='remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cart-down">
            <div className="cart-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cart-totalitem">
                        <p>Subtotal</p>
                        <p>${gettotalamount()}</p>
                    </div>
                    <hr />
                    <div className="cart-totalitem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-totalitem">
                        <h3>Total</h3>
                        <h3>${gettotalamount()}</h3>
                    </div>
                </div>
                <button>
                    Proceed To Checkout
                </button>
            </div>
            <div className="promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}
