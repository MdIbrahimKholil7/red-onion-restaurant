import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useBreakfast, useDinner, useFood, useLunch } from '../../../hooks/useProduct';
import Product from '../Product/Product';
import './Header.css'
const Header = () => {
    const [dinner] = useDinner()
    const [lunch] = useLunch()
    const [breakfast] = useBreakfast()
    const [allFood,setAllFood] = useState([])
    const [allItem, setAllItem] = useState([])
    useEffect(() => {
        const allProduct = [...dinner, ...lunch, ...breakfast]
        setAllFood(allProduct)
        setAllItem(allProduct)
    }, [dinner, breakfast, lunch])
    // breakfast product 
    const filterProduct = selectedProduct => {
        const filterFood = allFood.filter(product => product.category === selectedProduct)
        if (filterFood) {
            setAllItem(filterFood)
        }
    }

    return (
        <div className='container'>
            <nav className='flex justify-center my-20'>
                <div>
                    <div className='text-center mb-16 text-3xl'>
                        <button className='ml-9' onClick={() => filterProduct('breakfast')}>Breakfast</button>
                        <button className='ml-9' onClick={() => filterProduct('lunch')}>Lunch</button>
                        <button className='ml-9' onClick={() => filterProduct('dinner')}>Dinner</button>
                    </div>

                    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-center'>
                        {
                            (allItem.length > 7 ? allItem.slice(0, 6) : allItem).map(item => <NavLink key={item.id} to={`menuitem/${item.id}`}>
                                <Product
                                product={item}
                            />
                            </NavLink>)
                        }
                    </div>
                </div>
            </nav>
            <div className='  mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Header;