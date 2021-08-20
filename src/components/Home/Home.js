import React from 'react';
import Content from './Content';
import Carouselka from '../Carousel/Carouselka'
import SliderBottom from './SliderBottom'

const Home = () => {
    return (
        <div>
            <Carouselka />
            <Content/>
            <SliderBottom/>
        </div>
    );
};

export default Home;