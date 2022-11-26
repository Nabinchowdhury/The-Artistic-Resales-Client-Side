import React, { useState } from 'react';

const Advertisement = () => {
    const id = 1

    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)

    const changeAd = (id, change) => {

        if (change === "prev") {
            let p = id - 1
            if (p < 1) {
                p = 3
            }
            setPrev(p)
        }
        if (change === "next") {
            let p = id + 1
            if (p > 3) {
                p = 1
            }
            setNext(p)
        }
    }

    return (
        <div>
            <h3 className='text-4xl font-bold my-20'>Hot Deals!</h3>
            <div className="carousel w-full md:w-2/3 lg:w-3/5 mx-auto">
                <div id={id} className="carousel-item relative w-full ">
                    <div className="card w-10/12  bg-base-100 shadow-xl image-full  mx-auto">
                        <figure><img src="https://i.pinimg.com/736x/38/a0/77/38a07770334a71093d90460e8b18a6ac--band-rock-musica-rock.jpg" alt="" className='w-full' /></figure>
                        <div className="card-body mt-15">
                            <h2 className="card-title flex justify-center text-3xl">Advertise</h2>
                            <p className='text-left'>So many instruments are waiting for you!
                                Come check and get your desired instruments.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn btn-warning "> Check Advertiase</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href={`#${prev}`} onClick={() => changeAd(id, "prev")} className="btn btn-circle ">❮</a>
                        <a href={`#${next}`} onClick={() => changeAd(id, "next")} className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="2" className="carousel-item relative w-full ">
                    <div className="card w-10/12  bg-base-100 shadow-xl image-full  mx-auto">
                        <figure><img src="https://i.pinimg.com/736x/38/a0/77/38a07770334a71093d90460e8b18a6ac--band-rock-musica-rock.jpg" alt="" className='w-full' /></figure>
                        <div className="card-body mt-15">
                            <h2 className="card-title flex justify-center text-3xl">Advertise 2</h2>
                            <p className='text-left'>So many instruments are waiting for you!
                                Come check and get your desired instruments.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn btn-warning "> Check Advertiase</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href={`#${prev}`} onClick={() => changeAd(2, "prev")} className="btn btn-circle ">❮</a>
                        <a href="#3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="3" className="carousel-item relative w-full ">
                    <div className="card w-10/12  bg-base-100 shadow-xl image-full  mx-auto">
                        <figure><img src="https://i.pinimg.com/736x/38/a0/77/38a07770334a71093d90460e8b18a6ac--band-rock-musica-rock.jpg" alt="" className='w-full' /></figure>
                        <div className="card-body mt-15">
                            <h2 className="card-title flex justify-center text-3xl">Advertise 3</h2>
                            <p className='text-left'>So many instruments are waiting for you!
                                Come check and get your desired instruments.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn btn-warning "> Check Advertiase</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href={`#${prev}`} onClick={() => changeAd(3, "prev")} className="btn btn-circle ">❮</a>
                        <a href="#1" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Advertisement;