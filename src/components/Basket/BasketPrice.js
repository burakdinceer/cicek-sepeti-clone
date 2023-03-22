import React from 'react'
import {  useSelector } from 'react-redux'

const BasketPrice = () => {
   const {basket} = useSelector((state) => state.data)
  
   const sum = basket.reduce((acc,item) => acc+ item.price,0)

  return (
    <div className='w-64 h-12 border-y border-x bg-red-400 rounded-lg flex flex-col items-center'>
       <div className='text-white text-xs '><span className='text-yellow-300'>{sum > 2000 ? 'Kargonuz Bedava' : `${2000 - sum } Tl'lik Ürüne Kargo Bedava...`  }  </span>  </div> 
        <div className='mt-3'>  
         <div><progress className='text-yellow-400' id="file" value={sum} max="2000">  </progress></div>
        </div>
       
    </div>
  )
}

export default BasketPrice