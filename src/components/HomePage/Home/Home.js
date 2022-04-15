import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ChooseUs from '../ChooseUS/ChooseUs/ChooseUs';
import Header from '../Header/Header';
import HeroArea from '../HeroArea/HeroArea';
import HomeHeader from '../HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HeroArea/>
            <Header/>
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;