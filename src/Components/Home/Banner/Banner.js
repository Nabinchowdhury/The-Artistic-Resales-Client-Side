import React from 'react';

const Banner = () => {
    // const car
    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://hiphopmakers.b-cdn.net/wp-content/uploads/2022/09/Best-Websites-To-Buy-Used-Musical-Instruments.webp" alt="music_gear" className="lg:w-4/5 mx-auto rounded-2xl " style={{ "height": "80vh" }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://www.soundpure.com/img/Mobile-Vintage-Used-Banner.jpg" alt="music_gear" className="lg:w-4/5 mx-auto rounded-2xl" style={{ "height": "80vh" }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src="https://images.squarespace-cdn.com/content/v1/5a90e4c80dbda346e74ce9da/1627916001547-VVD7TT493ZGCMS8WQ8J8/1+-+Why+No+Instruments+Title.png" alt="music_gear" className="lg:w-4/5 mx-auto rounded-2xl" style={{ "height": "80vh" }} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Banner;