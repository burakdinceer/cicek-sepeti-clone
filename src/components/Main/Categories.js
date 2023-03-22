import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/dataSlice'


const Categories = () => {
  const dispatch = useDispatch()
  const {product,categories} = useSelector((state) => state.data)

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
           
            {
              categories?.map(item => (
                <button onClick={()=>handleCategory(item.categoryName)} className='w-36 h-10 border-y border-x border-gray-300 rounded-lg font-bold text-gray-400 text-sm  hover:bg-blue-700 hover:text-white mb-5  focus:bg-blue-700 focus:text-white '>{item.categoryName}</button>
              ))
            }
           
           </div>
        </div>
    </div>
  )
}

export default Categories