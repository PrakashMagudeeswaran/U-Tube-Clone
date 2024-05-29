
import { useEffect } from 'react'
import { SEARCH_API } from '../Components/Links'
import { useDispatch } from 'react-redux'
import { searchsuggestions } from '../Components/homeSlice'
import {useSelector} from 'react-redux'

const useSearchAPI = (query) => {
  const searches=(useSelector(store=>store.home.search))
  const dispatch=useDispatch()
  const search=async()=>{
    const data= await fetch(SEARCH_API+query)
    const json= await data.json()
    dispatch(searchsuggestions(json))
  }
useEffect(()=>{
  setTimeout(()=>{
    if (searches[query]){
      dispatch(searches[query])
    }
    else{
      search()
    }
    
    
    
    
    },200)
},[query])
}

export default useSearchAPI
