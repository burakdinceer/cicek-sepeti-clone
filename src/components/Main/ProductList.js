import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/dataSlice'

const ProductList = () => {

   const dispatch = useDispatch()
    const {product, fakeData} = useSelector((state) => state.data)
  
    const handleBasket = (item) => {
      dispatch(addBasket(item))
    }
  return (
    <div>
        
        <div className='grid grid-cols-4 container mx-auto mt-5 ml-12 p-5 '>
            { fakeData.length > 0 ?
                fakeData.map((item) => (
                    
                        <div key={item.id} className=' h-60 border-x border-y border-gray-200 rounded-lg mt-5 mr-3'>
                            <img className='h-40 w-full object-contain' alt='aa' src={item.url}/>
                           <div className='p-1'>
                                <div className='text-xs text-gray-500'>{item.name}</div>
                                <div className='text-xs text-green-500 font-bold'>Ücretsiz Teslimat</div>
                                <div className='text-xs font-bold'>{item.price}
                                <button onClick={()=>handleBasket(item)} className='border-y border-x border-blue-600 text-blue-600 rounded-xl text-center w-full h-6 text-sm'>Sepete Ekle</button>
                                </div>  
                                
                           </div>
                         </div>
                   
                )) :
                product.map((item) => (
                    
                  <div key={item.id} className=' h-60 border-x border-y border-gray-200 rounded-lg mt-5 mr-3'>
                      <img className='h-40 w-full object-contain' alt='aa' src={item.url}/>
                     <div className='p-1'>
                          <div className='text-xs text-gray-500'>{item.name}</div>
                          <div className='text-xs text-green-500 font-bold'>Ücretsiz Teslimat</div>
                          <div className='text-xs font-bold'>{item.price}
                          <button onClick={()=>handleBasket(item)} className='border-y border-x border-blue-600 text-blue-600 rounded-xl text-center w-full h-6 text-sm'>Sepete Ekle</button>
                          </div>  
                          
                     </div>
                   </div>
             
          ))

            }
        </div>
    </div>
  )
}

export default ProductList