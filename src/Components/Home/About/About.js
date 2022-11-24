import React from 'react';
import { FaCheck } from "react-icons/fa";

const About = () => {
    return (
        <div className=''>
            <h2 className='text-4xl font-bold my-20'>About Us</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-32">
                <figure><img src="https://media.bizj.us/view/img/11387806/gettyimages-684852818*1200xx7360-4140-0-386.jpg" alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title my-10 text-2xl font-bold" >Want to trade your instrument?</h2>
                    <p className='text-left'>Looking for trading Used Gear? You may have just discovered your solution. Sound interesting?</p>
                    <div className='mb-10'>
                        <p className='flex items-center font-semibold'><FaCheck className='mr-3 text-blue-500'></FaCheck> Reliable</p>
                        <p className='flex items-center font-semibold '><FaCheck className='mr-3 text-blue-500'></FaCheck> Secure Transaction</p>
                        <p className='flex items-center font-semibold'><FaCheck className='mr-3 text-blue-500'></FaCheck> Verified Buyers</p>
                        <p className='flex items-center font-semibold'><FaCheck className='mr-3 text-blue-500'></FaCheck> Premium Customers</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;