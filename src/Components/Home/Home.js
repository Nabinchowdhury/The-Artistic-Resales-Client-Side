import React from 'react';
import About from './About/About';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <About></About>
        </div>
    );
};

export default Home; 