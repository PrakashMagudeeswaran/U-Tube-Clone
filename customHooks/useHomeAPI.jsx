import {UTUBE_API} from '../Components/Links'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {mostpopular} from '../Components/homeSlice'

const useHomeAPI=()=>{
const dispatch=useDispatch()
const youtube=async()=>{
const data= await fetch(UTUBE_API)
const json= await data.json()
dispatch(mostpopular(json))
console.log(json)
}
useEffect(() => {
  youtube()
}, [])}

export default useHomeAPI
