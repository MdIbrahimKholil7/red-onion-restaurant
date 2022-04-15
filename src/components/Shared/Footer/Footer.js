import React from 'react';
import logo from '../../../product-img/images/logo.png'
import './Footer.css'
const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='bg-black py-10 text-white mt-[20rem]'>
            <section className='container '>
                <div className='footer-container'>
                    <div>
                        <img className='w-[10rem]' src={logo} alt="" />
                    </div>
                    <div className='bg-red-400 md:flex lg:block justify-between'>
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
                    <div>
                       <p> Copyright &copy; {year} online food</p>
                       <div>
                           <p>Privacy policy</p>
                           <p>Terms of use</p>
                           <p>Pricing</p>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;