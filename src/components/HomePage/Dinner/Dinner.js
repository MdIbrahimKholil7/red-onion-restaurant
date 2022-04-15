import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDinner } from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Dinner = () => {
    const [dinner] = useDinner()
    console.log(dinner)
    return (
        <div className='container'>

            <section className='grid md:grid-cols-3 justify-center sm:grid-cols-2 '>
                {
                    dinner.map(product => <Link key={product.key} to={`/menuitem/${product.id}`}>
                        <Product
                            
                            product={product}
                        />
                    </Link>)
                }
            </section>

        </div>
    );
};

export default Dinner;