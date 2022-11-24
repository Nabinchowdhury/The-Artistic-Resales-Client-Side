import React from 'react';

const Banner = () => {
    // const car
    return (

        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://hiphopmakers.b-cdn.net/wp-content/uploads/2022/09/Best-Websites-To-Buy-Used-Musical-Instruments.webp" alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh] " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://preview.redd.it/4cvro0z210r41.jpg?width=640&crop=smart&auto=webp&s=c4d13fd0129125bc44af4e7b263cdef69d03c65b" alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src="https://instagrammernews.com/image/BIa0y5rAojb" alt="music_gear" className="w-full lg:w-5/6 mx-auto rounded-2xl h-96 lg:h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Banner;