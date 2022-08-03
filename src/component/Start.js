import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'	
import { fetchAllPlace, getAllPlaceSelector } from '../redux/slice/MainSlice'




export const Start = () => {

    const dispatch = useDispatch();
    const { AllPlace, loading, hasErrors } = useSelector(getAllPlaceSelector)




    useEffect(() => {
        dispatch(fetchAllPlace("https://jsonplaceholder.typicode.com/todos"))
      }, [dispatch])
    

  return (
    <div>this istart page</div>
  )
}
