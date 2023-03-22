import React from 'react'
import BasketPrice from '../Basket/BasketPrice'

const NavText = () => {
  return (
    <div className='bg-blue-700 mt-5 relative '>
      <div className='container mx-auto   '> 
         <h1 className='text-white h-14 ml-12 font-bold text-3xl p-2'>ÇiçekSepeti</h1>
         </div>
         <div className='absolute -top-3 right-24'><BasketPrice/></div>
    </div>
  )
}

export default NavText