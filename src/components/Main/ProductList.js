import React from 'react'
import {  useSelector } from 'react-redux'

const ProductList = () => {
   
    const {product} = useSelector((state) => state.data)
    console.log(product)
  return (
    <div>
        
        <div className='grid grid-cols-5 container mx-auto mt-5 ml-12 p-5 '>
            {
                product.map((item,key) => (
                    
                        <div key={item.id} className='w-56 h-60 border-x border-y border-gray-200 rounded-lg mt-5'>
                            <img className='h-40 w-full' alt='aa' src={item.url}/>
                           <div className='p-1'>
                                <div className='text-xs text-gray-500'>{item.name}</div>
                                <div className='text-xs text-green-500 font-bold'>Ücretsiz Teslimat</div>
                                <div className='text-xs font-bold'>{item.price}</div>
                           </div>
                         </div>
                   
                ))
            }
        </div>
    </div>
  )
}

export default ProductList