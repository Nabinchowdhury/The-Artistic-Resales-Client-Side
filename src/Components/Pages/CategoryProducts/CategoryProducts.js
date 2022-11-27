
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import BookModal from './BookModal/BookModal';
import CategoryNames from './CategoryNames/CategoryNames';

const CategoryProducts = () => {

    const categoryProducts = useLoaderData()
    const [bookingProduct, setBookingProduct] = useState(null)
    const navigation = useNavigation()

    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>

            <div className='flex flex-col md:grid md:grid-cols-6 lg:grid-cols-4 gap-4 ' >
                <div className='md:col-span-2 lg:col-span-1 '>
                    <div className={`mt-20 sticky top-20 h-auto`}>
                        <div className={` rounded-2xl `}>
                            {
                                <CategoryNames></CategoryNames>
                            }
                        </div>
                    </div>
                </div>
                <div className={`md:col-span-4 lg:col-span-3`}>
                    <h2 className='text-3xl text-center my-10'>Products</h2>
                    {
                        categoryProducts.map(product =>
                            <div key={product._id} className="card lg:card-side bg-base-100 shadow-xl md:mr-10 my-10">
                                <figure className='w-full lg:w-1/2'><img src={product.image} alt="Album" className='w-full h-full' /></figure>
                                <div className="card-body">
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
                                        <button className="btn btn-error">Report to Admin</button>
                                        <button className="btn">Add To WishList</button>

                                        <label htmlFor="bookModal" className="btn btn-success" disabled={false}
                                            onClick={() => setBookingProduct(product)}>Book Now</label>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            {
                bookingProduct && <BookModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></BookModal>
            }
        </div>
    );
};

export default CategoryProducts;