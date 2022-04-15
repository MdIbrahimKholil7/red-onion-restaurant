import React from 'react';
import { useLunch } from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Lunch = () => {
    const [lunch]=useLunch()
    return (
        <div>
            <section className='grid grid-cols-3'>
                {
                    lunch.map(product=><Product
                    key={product.id}
                    product={product}
                    />)
                }
            </section>
        </div>
    );
};

export default Lunch;