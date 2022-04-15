import React from 'react';
import { useDinner } from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Dinner = () => {
    const [dinner]=useDinner()
    return (
        <div className='container'>

            <section className='grid grid-cols-3'>
                {
                    dinner.map(product=><Product
                    key={product.key}
                    product={product}
                    />)
                }
            </section>

        </div>
    );
};

export default Dinner;