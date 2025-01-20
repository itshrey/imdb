import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import { CartItems } from "../Components/CartItems/CartItems";
export const ShopContext=createContext()

const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
   }
const ShopContextProvider=(props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const addToCart= (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart= (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const gettotalamount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                if (iteminfo) {
                    total += iteminfo.new_price * cartItems[item];
                } else {
                    console.warn(`Product with id ${item} not found in all_product.`);
                }
            }
        }
        return total;
    }
    

    const gettotalitem=()=>{
        let ti=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                ti += cartItems[item];
            }
        }
        return ti;
    }

    const contextValue = {all_product,cartItems,gettotalamount,gettotalitem,addToCart,removeFromCart};

   
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;