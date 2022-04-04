import { useEffect, useState } from "react"

 const useReviews = ()=>{
    const [reviews, setReviews] = useState([])
    const getRevies = async ()=>{
        const response =  await fetch('tvReviews.json')
        setReviews(await response.json())
    } 
    useEffect(()=>{getRevies()},[])
    return [reviews, setReviews]
}
export default useReviews