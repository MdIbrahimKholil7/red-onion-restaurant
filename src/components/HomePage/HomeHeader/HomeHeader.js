import React from 'react';
import logo from '../../../product-img/images/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
const HomeHeader = () => {
    return (
        <div className='bg-slate-400 h-[8rem] flex justify-center items-center'>
            <header className='container'>
                <nav className='flex justify-between items-center'>
                    <div className="logo">
                        <img className='h-[4rem]' src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex items-center text-black text-3xl'>
                            <li className='ml-10'><ShoppingCartIcon className='w-[3rem] ' /></li>
                            <li className='ml-10'><Link to='/login'>Login</Link></li>
                            <li className='ml-10 sm:text-[1.3rem] bg-red-600 rounded-full flex items-center py-3 text-white px-7'><Link to='/signup' >Sign Up</Link></li>
                        </ul>

                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HomeHeader;