import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

const Carouselka = () => {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/200429.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className='slidetext'>
                    <h3>Travel with Dream</h3>
                    <p>Paradise Island Resort & Spa Lankanfinolhu North, Мальдивы</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/378016.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className='slidetext'>
                    <h3>Breathe in fresh mountain air</h3>
                    <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/296466.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='slidetext'>
                    <h3>Paris</h3>
                    <p>Find hidden gems in your own city</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carouselka;