import React from 'react';
import Header from '../Header/Header';
import HeroArea from '../HeroArea/HeroArea';
import HomeHeader from '../HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HeroArea/>
            <Header/>
        </div>
    );
};

export default Home;