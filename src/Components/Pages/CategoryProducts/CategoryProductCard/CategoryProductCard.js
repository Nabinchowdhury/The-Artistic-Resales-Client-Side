import React from 'react';
import { FaCheck } from 'react-icons/fa';
import useBooking from '../../../Hooks/useBooking/useBooking';

const CategoryProductCard = ({ product, setBookingProduct, handleReport }) => {

    // console.log(product);
    const [isBooked] = useBooking(product._id)
    return (
        <>
            {
                product.status === "Available" &&
                <div className="card lg:card-side bg-base-100 shadow-xl md:mr-10 my-10">
                    <figure className='w-full lg:w-1/2 '><img src={product.image} alt="Album" className='w-full h-full' /></figure>
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title">{product.productName}</h2>
                        <p className='text-left'>{product.description}</p>
                        <p className='text-left'>Selling Price: ${product.price}</p>
                        <p className='text-left'>Original Price: ${product.originalPrice}</p>
                        <p className='text-left'>Years of use: {product.purchaseYear}</p>
                        <p className='text-left'>Location: {product.location}</p>
                        <p className='text-left'>Condition: {product.condition}</p>
                        <p className='text-left'>Post Date: {product.date.split("T")[0]}</p>
                        <p className='text-left'>Seller Name: {product.sellerName} {product.isVerified && <span> <FaCheck className='inline text-blue-600 ml-2'></FaCheck> Verified Seller</span>}</p>
                        <p className='text-left'>Seller Phone: {product.mobileNo}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error" onClick={() => handleReport(product)}>Report to Admin</button>
                            <button className="btn">Add To WishList</button>

                            <label htmlFor="bookModal" className="btn btn-success" disabled={isBooked}
                                onClick={() => setBookingProduct(product._id)}>{isBooked ? "Booked" : "Book Now"}</label>

                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CategoryProductCard;