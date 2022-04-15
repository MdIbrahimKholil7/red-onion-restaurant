import React from 'react';
import { useDinner } from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Dinner = () => {
    const [dinner]=useDinner()
    return (
        <div className='container'>

            <section className='grid md:grid-cols-3 justify-center sm:grid-cols-2 '>
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