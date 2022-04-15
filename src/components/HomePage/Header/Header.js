import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const links = [
        { name: 'Breakfast', to: '/breakfast', id: 1 },
        { name: 'Lunch', to: '/lunch', id: 2 },
        { name: 'Dinner', to: '/Dinner', id: 3 },
    ]
    return (
        <div className='container'>
            <nav className='flex justify-center my-20'>
                <div className='flex'>

                    {
                        links.map(link  => <NavLink
                            className={({isActive})=>isActive?'link text-3xl':'text-3xl ml-8'}
                            key={link.id}
                            to={link.to}>
                                    {link.name}
                           </NavLink>)
                    }
                    
                </div>
            </nav>
            <div className='  mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Header;