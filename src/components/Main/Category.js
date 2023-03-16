import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'
const Category = () => {
  return (
    <div className='container mx-auto mt-5'>
        <div className='flex ml-14 items-center text-blue-600 font-bold text-lg'>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            <h1 className='ml-2'>Kategoriler</h1>
        </div>
        <div className='ml-12 mt-2'>
           <div className='grid grid-cols-7 '>
           <button   className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm  hover:bg-blue-700 hover:text-white mb-5'>Tüm Kategoriler</button>
            <button  className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Elektronik</button>
            <button disabled className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Ev ve Yaşam</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Evcil Hayvan</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Kitap</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Oyuncak</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Spor</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Çiçek</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Hediye</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Moda,Aksesuar</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Ofis,Kırtasiye</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Parfüm</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Kişisel Bakım</button>
            <button className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Petshop</button>
           </div>
        </div>
    </div>
  )
}

export default Category