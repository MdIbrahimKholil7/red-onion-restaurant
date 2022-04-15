import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useBreakfast, useDinner, useLunch } from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Header.css'
const Header = () => {
    const [dinner] = useDinner()
    const [lunch] = useLunch()
    const [breakfast] = useBreakfast()
    const [allItem, setAllItem] = useState([])
    const [products, setProduct] = useState([])
    const links = [
        { name: 'Breakfast', to: '/breakfast', id: 1 },
        { name: 'Lunch', to: '/lunch', id: 2 },
        { name: 'Dinner', to: '/Dinner', id: 3 },
    ]
    useEffect(() => {
        const allProduct = [...dinner, ...lunch, ...breakfast]
        setProduct(allProduct)
        setAllItem(allProduct)
    }, [dinner, breakfast, lunch])

    // breakfast product 
    const filterProduct=selectedProduct=>{
        const filterFood=products.filter(product => product.category === selectedProduct)
        if(filterFood){
            setAllItem(filterFood)
        }
    }

    return (
        <div className='container'>
            <nav className='flex justify-center my-20'>
                <div>
                    <div className='text-center mb-16 text-3xl'>
                        <button className='ml-9' onClick={()=>filterProduct('breakfast')}>Breakfast</button>
                        <button className='ml-9' onClick={()=>filterProduct('lunch')}>Lunch</button>
                        <button className='ml-9' onClick={()=>filterProduct('dinner')}>Dinner</button>
                    </div>

                    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center'>
                        {
                            (allItem.length>7 ? allItem.slice(0,6):allItem).map(item => <Product
                                key={item.id}
                                product={item}
                            />)
                        }
                    </div>

                    {/* <NavLink>Breakfast</NavLink> */}
                    {/* {
                        allItem.map(link  => <NavLink
                            className={({isActive})=>isActive?'link text-3xl':'text-3xl ml-8'}
                            key={link.id}
                            to={link.to}>
                                    {link.name}
                           </NavLink>)
                    } */}

                </div>
            </nav>
            <div className='  mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Header;