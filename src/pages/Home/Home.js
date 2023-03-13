import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import { fetchData } from '../../redux/dataSlice'

  
   
const Home = () => {
    const dispatch = useDispatch()  

    useEffect(() => {
         dispatch(fetchData())   
    },[])
   
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Home