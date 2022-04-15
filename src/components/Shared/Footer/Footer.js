import React from 'react';
import logo from '../../../product-img/images/logo.png'
import './Footer.css'
const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='bg-black py-10 text-white mt-[20rem]'>
            <section className='container '>
                <div className='footer-container sm:grid-cols-2'>
                    <div>
                        <img className='w-[10rem]' src={logo} alt="" />
                    </div>
                    <div className= 'flex sm:flex md:flex  justify-between'>
                        <div >
                            <p>About online food</p>
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurant</p>
                        </div>
                        <div>
                            <p>Get helps</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurants near me</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='md:flex sm:flex text-center sm:text-0 justify-between items-center mt-9'>
                       <p className='text-2xl'> Copyright &copy; {year} online food</p>
                       <div className='flex text-2xl text-center justify-center mt-6 md:mt-0 sm:mt-6 pb-3 sm:pb-0 md:pb-0'>
                           <p className='ml-9'>Privacy policy</p>
                           <p className='ml-9'>Terms of use</p>
                           <p className='ml-9'>Pricing</p>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;