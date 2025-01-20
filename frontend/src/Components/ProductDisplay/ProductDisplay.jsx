import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart} =useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="product-left">
            <div className="product-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                
            </div>
            <div className="product-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={stardull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-right-prices">
                <div className="product-right-old-prive">
                    ${product.old_price}
                </div>
                <div className="product-right-new-prive">
                    ${product.new_price}
                </div>
            </div>
            <div className="product-right-discription">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="product-right-size">
                <h1>Select Size</h1>
                <div className="product-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="product-right-category">
                <span>Category :</span>Women ,T-shirt, Crop Top
            </p>
            <p className="product-right-category">
                <span>Tags :</span>Modern ,Latest
            </p>
        </div>
    </div>
  )
}
