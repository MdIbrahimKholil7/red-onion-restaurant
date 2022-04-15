import React from 'react';
import { useBreakfast, useDinner } from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Breakfast.css'
const Breakfast = () => {
    const [breakfast]=useBreakfast()
    return (
        <div>
            <section className='grid grid-cols-3 lg:grid-cols-3 gap-12'>
                {
                    breakfast.map(product=><Product
                    key={product.key}
                    product={product}
                    />)
                }
            </section>
        </div>
    );
};
export default Breakfast;