import React from 'react';
import banner from "../../../../images/Banner.webp"

const Banner = () => {
    // const car
    return (

        <div className="carousel w-full my-20">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner} alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh] " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/xuAdI7GzJTs8KkxI64dBDw/l.jpg" alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full "><img src={banner}
                alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Banner;