import React from 'react';
import './HeroArea.css'
import bgimg from '../../../product-img/images/bannerbackground.png'
const HeroArea = () => {
    return (
        <div className='h-[78vh] w-full hero-container relative'>
            <div className='banner-img'>
                <img src={bgimg} alt="" />
            </div>
            <div className='container flex items-center justify-center h-full absolute banner text-center'>
                <div className='text-center'>
                    <h1 className='text-[4rem] mb-4' >Best Food Waiting For Your Belly</h1>
                    <div className='flex justify-center relative'>
                        <input className='input' type="text" placeholder='Search food items'/>
                        <button className='sm:text-[1.3rem] text-[1.7rem] bg-red-600 rounded-full flex items-center py-3 text-white px-7 absolute top-0 right-[13.3rem]'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;