import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBreakfast, useDinner, useLunch } from '../../hooks/useProduct';
import './MenuItem.css'
const MenuItem = () => {
    const [allItem,setAllItem]=useState([])
    const [idProduct,setIdProduct]=useState([])
    const [filterProduct,setFilterProduct]=useState([])
    const {itemId}=useParams()
    const [breakfast]=useBreakfast()
    const [lunch]=useDinner()
    const [dinner]=useDinner()
    
    useEffect(() => {
        const allProduct = [...dinner, ...lunch, ...breakfast]
        setAllItem(allProduct)
    }, [dinner, breakfast, lunch])
    // filter product 
    useEffect(()=>{
        debugger
        const findProduct=allItem.find(item=> item.id === parseInt(itemId))
        console.log(findProduct)
        if(findProduct){
            const allFilterProduct=allItem.filter(item=>item.category === findProduct.category)
            const setItem=[new Set(allFilterProduct)]
            setFilterProduct(setItem)
            console.log(filterProduct)
        }
    },[itemId])
    // 
    return (
        <div>
            <h1>This is menu Item {itemId}</h1>
        </div>
    );
};

export default MenuItem;