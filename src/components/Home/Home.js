import React from 'react';
import Content from './Content';
import Carouselka from '../Carousel/Carouselka'
import SliderBottom from './SliderBottom'
import Sortirovka from '../Filter/Filter';

const Home = () => {
    return (
        <div>
            <Carouselka />
            <Sortirovka/>
            <Content/>
            <SliderBottom/>
        </div>
    );
};

export default Home;