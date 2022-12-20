import React from 'react';
import { Link } from 'react-router-dom';
import card from "../../../../../images/cards.jpg"

const CategoryCards = ({ category }) => {


    return (
        <div className='' >
            <div className="card w-auto bg-base-100 shadow-xl image-full max-h-60 md:max-h-96  shadow-black	">
                <figure><img src={card} alt="" className='w-full' /></figure>
                <div className="card-body mt-15">
                    <h2 className="card-title flex justify-center text-3xl">{category}</h2>
                    <p className='text-left'>So many instruments are waiting for you!
                        Come check and get your desired instruments.</p>
                    <div className="card-actions justify-center ">
                        <Link to={`/category/${category}`} ><button className="btn btn-warning "> Check {category}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCards;