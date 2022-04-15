import React from 'react';
import google from '../../../product-img/images/social/google.png'
import facebook from '../../../product-img/images/social/facebook.png'
const Social = () => {
    return (
        <div className='mt-6'>
            <div className='flex items-center'>
                <div className='left-div w-[50%] h-[.2rem] bg-red-500'></div>
                <p className='px-2'>or</p>
                <div className='right-div w-[50%] h-[.2rem] bg-red-500'></div>
            </div>
            <div className="icon">
                <button className='flex bg-gray-600 items-center w-[70%] mx-auto py-3'><span><img src={google} alt="" /></span>GoogleSignIn</button>
                <button className='flex items-center '><span><img className='w-[3rem]' src={facebook} alt="" /></span>FaceBook Sign In</button>
            </div>
        </div>
    );
};

export default Social;