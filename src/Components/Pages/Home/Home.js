import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Advertisement from './Advertisement/Advertisement';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <About></About>
        </div>
    );
};

export default Home; 