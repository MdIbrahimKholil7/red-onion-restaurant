import React from 'react';

const Product = ({product}) => {
    const {img,name,price,desc}=product || {}
    // console.log(product)
    return (
        <div className='w-[28rem] h-[30rem] text-center p-3  rounded-3xl hover:shadow-lg duration-300 ease-linear' >
            <div className=''>
                <img className='w-[15rem] mx-auto object-cover' src={img} alt="" />
            </div>
            <div className='mt-12'>
                <h1 className='font-[500] text-3xl'>{name}</h1>
                <p className='text-2xl my-2'>{desc}</p>
                <p className='text-2xl font-bold'>Price:${price}</p>
            </div>
        </div>
    );
};

export default Product;