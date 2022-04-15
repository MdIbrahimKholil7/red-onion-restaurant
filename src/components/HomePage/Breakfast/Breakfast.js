import React from 'react';
import { Link } from 'react-router-dom';
import { useBreakfast } from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Breakfast.css'
const Breakfast = () => {
    const [breakfast] = useBreakfast()
    console.log(breakfast)
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-center grid-cols-1'>

            {
                breakfast.map(product => <Link to={`/menuitem/${product.id}`}  key={product.key}>
                    <Product
                       
                        product={product}
                    />
                </Link>)
            }

        </div>
    );
};
export default Breakfast;