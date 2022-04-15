import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBreakfast, useDinner, useLunch } from '../../hooks/useProduct';
import './MenuItem.css'
const MenuItem = () => {
    const [allItem,setAllItem]=useState()
    const {itemId}=useParams()
    const [breakfast]=useBreakfast()
    const [lunch]=useLunch()
    
       console.log(breakfast,lunch)
    return (
        <div>
            <h1>This is menu Item {itemId}</h1>
        </div>
    );
};

export default MenuItem;