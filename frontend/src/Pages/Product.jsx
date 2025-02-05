import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import { Breadcrums } from '../Components/Breadcrums/Breadcrums'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DiscriptionBox } from '../Components/DiscriptionBox/DiscriptionBox'
import { RealtedProducts } from '../Components/RelatedProducts/RealtedProducts'
export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId}= useParams();
  const product=all_product.find((e)=> e.id===Number(productId))
  return (
    <div className='product'>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RealtedProducts />
    </div>
  )
}
