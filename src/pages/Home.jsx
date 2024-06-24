import React from 'react';
import Banner from '../components/home/Banner';
import Category from '../components/home/Category';
import PopularMenu from '../components/home/PopularMenu';
import Featured from '../components/home/Featured';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
        </div>
    );
};

export default Home;