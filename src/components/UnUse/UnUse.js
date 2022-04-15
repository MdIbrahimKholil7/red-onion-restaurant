import React from 'react';
import { useDinner } from '../../hooks/useProduct';

const UnUse = () => {
    const [dinner]=useDinner()
    return (
        <div class='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                dinner.map(prod=><div>
                    <img className='w-[15rem]' src={prod.img} alt="" />
                    <h1>{prod.name}</h1>
                </div>)
            }
        </div>
    );
};

export default UnUse;