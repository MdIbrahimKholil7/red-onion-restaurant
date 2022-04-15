
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import React from 'react';

const Card = ({ item }) => {
    const { img, name, details, icon } = item
    console.log(icon)
    return (
        <div >
            <div className='w-[29rem] h-[30rem]'>
                <div>
                    <img className='w-[25] mx-auto' src={img} alt={name} />
                </div>
                <div>
                    <div className=''>

                        <div className='flex items-center mt-3 '>
                            <img className='mr-4' src={icon} alt="" />
                            <h1 className='text-3xl'>{name}</h1>
                           
                        </div>
                        <p className='pl-[5.6rem] text-xl'>{details}</p>
                    </div>
                    <button className='flex items-center pl-[5.6rem] text-2xl mt-3 text-sky-500'>See more <ArrowSmRightIcon className='w-8 rounded-[50%] ml-7 bg-green-400 text-white ' /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;