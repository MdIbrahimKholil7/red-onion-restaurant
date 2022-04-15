import { useEffect, useState } from "react"

const useProduct=()=>{
    
}
const useDinner=()=>{
    const [dinner,setDinner]=useState([])
    useEffect(()=>{
        fetch('dinner.json')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return [dinner,setDinner]
}
const useLunch=()=>{
    const [lunch,setLunch]=useState([])
    useEffect(()=>{
        fetch('lunch.json')
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])
    return [lunch,setLunch]
}
const useBreakfast=()=>{
    const [breakfast,setBreakfast]=useState([])
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfast(data))
    },[])
    return [breakfast,setBreakfast]
}

export {useDinner,useProduct,useLunch,useBreakfast}