import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLunch } from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Lunch = () => {
    const {itemId}=useParams()
    const [lunch] = useLunch()
    return (
        <div>
            <section className='grid sm:grid-cols-2 justify-center md:grid-cols-3'>
                {
                    lunch.map(product => <Link key={product.id} to={`/menuitem/${product.id}`}>
                        <Product
                            
                            product={product}
                        />
                    </Link>)
                }
            </section>
        </div>
    );
};

export default Lunch;