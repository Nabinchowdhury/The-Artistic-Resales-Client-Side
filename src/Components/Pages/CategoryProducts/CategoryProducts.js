
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData, useNavigation } from 'react-router-dom';
import useBooking from '../../Hooks/useBooking/useBooking';
import Spinner from '../../Spinner/Spinner';
import BookModal from './BookModal/BookModal';
import CategoryNames from './CategoryNames/CategoryNames';
import CategoryProductCard from './CategoryProductCard/CategoryProductCard';

const CategoryProducts = () => {

    const categoryProducts = useLoaderData()
    const [bookingProduct, setBookingProduct] = useState(null)

    // const id = useLoaderData()
    // const [booked, setBooked] = useState(false)

    // const { data: categoryProducts = [], isLoading, refetch } = useQuery({
    //     queryKey: ["category", id],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/category/${id}`, {
    //             headers: { authorization: `bearer ${localStorage.getItem("AccessToken")}` }
    //         })
    //         const data = await res.json()
    //         return data
    //     }
    // })
    // if (booked) {
    //     console.log(booked)
    //     refetch()

    // }

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
                        categoryProducts.map(product => <CategoryProductCard key={product._id} product={product} setBookingProduct={setBookingProduct} ></CategoryProductCard>


                        )
                    }

                </div>
            </div>
            {
                bookingProduct && <BookModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}  ></BookModal>

            }

        </div>
    );
};

export default CategoryProducts;