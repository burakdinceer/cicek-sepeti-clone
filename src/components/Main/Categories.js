import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/dataSlice'

const Categories = () => {
  const dispatch = useDispatch()
  const {product} = useSelector((state) => state.data)

  const handleCategory = (name) => {
    const getName = product.filter((item) => (
      item.category === name
    ))
    dispatch(getData(getName))
  }

  return (
    <div className='container mx-auto mt-5'>
        <div className='flex ml-14 items-center text-blue-600 font-bold text-lg'>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            <h1 className='ml-2'>Kategoriler</h1>
        </div>
        <div className='ml-12 mt-2'>
           <div className='grid grid-cols-7 '>
           <button   className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm  hover:bg-blue-700 hover:text-white mb-5'>Tüm Kategoriler</button>
            <button name='Elektronik' onClick={(e)=>handleCategory('Elektronik')} className='w-36 h-10 border-y border-x  border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Elektronik</button>
            <button name='EleEv ve Yaşamktronik' onClick={(e)=>handleCategory('Ev ve Yaşam')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Ev ve Yaşam</button>
            <button name='Evcil Hayvan' onClick={(e)=>handleCategory('Evcil Hayvan')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Evcil Hayvan</button>
            <button name='Kitap' onClick={(e)=>handleCategory('Kitap')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Kitap</button>
            <button name='Oyuncak' onClick={(e)=>handleCategory('Oyuncak')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Oyuncak</button>
            <button name='Spor' onClick={(e)=>handleCategory('Spor')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Spor</button>
            <button name='Çiçek' onClick={(e)=>handleCategory('Çiçek')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Çiçek</button>
            <button name='Hediye' onClick={(e)=>handleCategory('Hediye')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Hediye</button>
            <button name='EleModa,Aksesuarktronik' onClick={(e)=>handleCategory('Moda,Aksesuar')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Moda,Aksesuar</button>
            <button name='Ofis,Kırtasiye' onClick={(e)=>handleCategory('Ofis,Kırtasiye')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Ofis,Kırtasiye</button>
            <button name='Parfüm' onClick={(e)=>handleCategory('Parfüm')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Parfüm</button>
            <button name='Kişisel Bakım' onClick={(e)=>handleCategory('Kişisel Bakım')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Kişisel Bakım</button>
            <button name='Petshop' onClick={(e)=>handleCategory('Petshop')} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm hover:bg-blue-700 hover:text-white'>Petshop</button>
           </div>
        </div>
    </div>
  )
}

export default Categories