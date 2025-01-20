import React from 'react'
import './RealtedProducts.css'
import { Item } from '../Item/Item'
import data_product from '../Assets/data'
export const RealtedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-items">
            {data_product.map((item,i)=>{
                return < Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}
