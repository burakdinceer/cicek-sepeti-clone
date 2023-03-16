import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterData } from '../../redux/dataSlice'

const Header = () => {

   const dispatch = useDispatch()
   const {product} = useSelector((state) => state.data)
  const handlePage = (e) => {
    const veri = e.target.value
   if(veri.length>2){
    const inputData = product.filter(item => item.name.toLocaleLowerCase().includes(veri.toLocaleLowerCase()))
    dispatch(filterData(inputData))
   }
  }

  return (
    <div className='flex items-center justify-center container mx-auto mt-5'>
        <div className=' basis-1/5 ml-10  '>
            <img className='w-36 h-10 object-contain ' alt='images' src='./ciceklogo.png'/></div>
        <div className=' basis-3/5 flex justify-center items-center relative '>
       <FontAwesomeIcon className='absolute top-3 left-1 text-gray-600' icon={faMagnifyingGlass}></FontAwesomeIcon>
            <input onChange={(e)=>handlePage(e)} className='w-full bg-gray-100 h-9 rounded-2xl border-y border-x border-gray-200 placeholder:text-gray-600' placeholder='      Ürün Adı'/>
            <button className='absolute right-2 bg-green-500 text-white rounded-xl w-11'>Ara</button>
        </div>
        <button>
        <div className='flex items-center justify-center  ml-10 bg-blue-600 rounded-3xl w-32 h-9 relative'>
            <FontAwesomeIcon  className='mr-2 text-white' icon={faBagShopping}></FontAwesomeIcon>
            <p className='text-white'>Sepetim</p>
            <label className='absolute text-xs bg-red-500 text-white -top-2 right-0 w-5 h-5 text-center rounded-full '>2</label>
        </div>
        
        </button>
    </div>
  )
}

export default Header