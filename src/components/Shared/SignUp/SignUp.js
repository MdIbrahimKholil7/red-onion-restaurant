import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../product-img/images/logo2.png'
import Social from '../Social/Social';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='h-[95vh] flex justify-center items-center '>
            <div className='w-[30rem] h-[45rem] '>
                <img className='h-[5rem] mx-auto mb-[4rem]' src={logo} alt="" />
                <form>
                    <div>
                        <input type="text" name='name' placeholder='Name'/>
                    </div>
                    <div>
                        <input type="email" name='email' placeholder='Email' required/>
                    </div>
                    <div>
                        <input type="password" name='password' placeholder='Password'/>
                    </div>
                    <div>
                        <input type="password" name='confirm-password' placeholder='Confirm Password'/>
                    </div>
                    <div>
                        <input className='bg-red-600 text-2xl mb-9 text-white rounded-full h-[4rem] py-[1rem 1.4rem]' type="submit" value='Sign Up '/>
                    </div>
                    <Link className='text-center block cursor-pointer text-red-500 text-xl' to='/login'>Already have an account</Link>
                    <Social/>
                </form>
            </div>
        </div>
    );
};

export default SignUp;