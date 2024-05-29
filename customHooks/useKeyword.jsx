import { useEffect } from 'react'
import {GoogleAPI} from '../Components/Links'
import { useDispatch } from 'react-redux';
import { mostpopular } from '../Components/homeSlice';
import {useSelector} from 'react-redux'


const useKeyword = () => {
   const popular=useSelector(store=>store.home.popular)
 const keyword=useSelector(store=>store.home.keyword)
 const dispatch=useDispatch()
 const keysearch=async()=>{
  const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&maxResults=50&order=viewCount&key=${GoogleAPI}`);
   const json= await data.json()
    dispatch(mostpopular(json))
   console.log(json)
   dispatch
 }

 useEffect(()=>{
!popular &&
    keysearch()
 },[keyword])
}

export default useKeyword
