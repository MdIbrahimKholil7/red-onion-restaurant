import React from 'react';
import { BellIcon, CameraIcon, DeviceMobileIcon } from '@heroicons/react/solid';
import fastFood from '../../../../product-img/images/adult-blur-blurred-background-687824.png'
import deliveryImg from '../../../../product-img/images/architecture-building-city-2047397.png'
import cheifImg from '../../../../product-img/images/chef-cook-food-33614.png'
import fastIcon from '../../../../product-img/images/icons/Group 204.png'
import deliveryIcon from '../../../../product-img/images/icons/Group 245.png'
import cheifIcon from '../../../../product-img/images/icons/Group 1133.png'
import Card from '../Card/Card';
import CheifCard from '../Card/CheifCard';
const ChooseUs = () => {
    const fastFoodDetails={
        img:fastFood,
        icon:fastIcon,
        name:'Fast Delivery',
        details:'Keep your system in sync with auto mated web hook based notification each time link is paid and how we dream about our future',
        id:1
    }
    const deliveryDetails={
        img:deliveryImg,
        name:'Home Delivery',
        icon:deliveryIcon,
        details:'Keep your system in sync with auto mated web hook based notification each time link is paid and how we dream about our future',
        id:2
    }
    const cheifDetails={
        img:cheifImg,
        name:'A Good Auto Responder',
        icon:cheifIcon,
        details:'Keep your system in sync with auto mated web hook based notification each time link is paid and how we dream about our future',
        id:3
    }
        
    
    return (
        <div className='container'>
            <div className='w-[60%] my-12'>
                <h1 className='text-5xl font-bold mb-5'>Why You Choose Us</h1>
                <p className='text-2xl'>Button waited twenty always repair within we do.An delighted offended curiosity my is dashwoods at.Boy prosperous increasing surrounded. </p>
            </div>
            <section className='container grid grid-cols-3 gap-12 '>
                <Card key={fastFoodDetails.id} item={fastFoodDetails}/>
                <CheifCard key={cheifDetails.id} item={cheifDetails} />
                <Card key={deliveryDetails.id} item={deliveryDetails}/>
            </section>
        </div>
    );
};

export default ChooseUs;