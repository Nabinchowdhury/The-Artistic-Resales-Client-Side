import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { ModalContext } from '../../../Layout/Main';

const Advertisement = () => {
    const { user } = useContext(AuthContext)
    const [advertisements, setAdvertisements] = useState([])

    const { bookingProduct, setBookingProduct } = useContext(ModalContext)

    useEffect(() => {
        fetch("http://localhost:5000/advertisement")
            .then(res => res.json())
            .then(data => setAdvertisements(data))
    }, [user])


    // const id = 1

    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)

    const changeAd = (id, change) => {

        if (change === "prev") {
            let p = id - 1
            if (p < 1) {
                p = advertisements.length - 1
            }
            setPrev(p)
        }
        if (change === "next") {
            let p = id + 1
            if (p > advertisements.length - 1) {
                p = 0
            }
            setNext(p)
        }
    }

    return (
        <>
            {
                advertisements.length &&
                <div>
                    <h3 className='text-4xl font-bold my-20'>Hot Deals!</h3>
                    <div className="carousel w-full md:w-2/3 lg:w-3/5 mx-auto">

                        {advertisements.map((advertisement, i) =>
                            <div key={advertisement._id} id={i} className="carousel-item relative w-full ">
                                <div className="card w-10/12  bg-base-100 shadow-xl image-full  mx-auto">
                                    <figure><img src={advertisement.image} alt="" className='w-full' /></figure>
                                    <div className="card-body   flex  justify-center">
                                        <div className=' '>
                                            <h2 className="card-title flex justify-center text-3xl">{advertisement.productName}</h2>
                                            <p className=''>{advertisement.description}</p>
                                            <p className='text-left'>Price: $ {advertisement.price}</p>
                                        </div>
                                        <div className="card-actions justify-center ">
                                            {/* <button className="btn btn-warning ">Book Now</button> */}
                                            {
                                                user ? <label htmlFor="bookModal" className="btn btn-warning"
                                                    onClick={() => setBookingProduct(advertisement)}>Book Now</label> : <Link to='/login'><button className='btn btn-warning'>Login</button> </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                                    <a href={`#${prev}`} onClick={() => changeAd(i, "prev")} className="btn btn-circle ">❮</a>
                                    <a href={`#${next}`} onClick={() => changeAd(i, "next")} className="btn btn-circle">❯</a>
                                </div>
                            </div>)}



                    </div>
                </div>
            }
        </>
    );
};

export default Advertisement;





{/* <div id="2" className="carousel-item relative w-full ">
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
                        </div> */}