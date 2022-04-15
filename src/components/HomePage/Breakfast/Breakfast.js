import React from 'react';
import { useBreakfast } from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Breakfast.css'
const Breakfast = () => {
    const [breakfast]=useBreakfast()
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-center grid-cols-1'>
          
                {
                    breakfast.map(product=><Product
                    key={product.key}
                    product={product}
                    />)
                }
            
        </div>
    );
};
export default Breakfast;