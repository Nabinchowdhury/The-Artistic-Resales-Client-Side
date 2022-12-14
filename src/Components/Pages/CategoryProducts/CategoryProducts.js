
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData, useNavigation } from 'react-router-dom';
import useBooking from '../../Hooks/useBooking/useBooking';
import { ModalContext } from '../../Layout/Main';
import Spinner from '../../Spinner/Spinner';
import BookModal from './BookModal/BookModal';
import CategoryNames from './CategoryNames/CategoryNames';
import CategoryProductCard from './CategoryProductCard/CategoryProductCard';

const CategoryProducts = () => {

    const categoryProducts = useLoaderData()
    // console.log(categoryProducts);
    // const [bookingProduct, setBookingProduct] = useState(null)
    const { bookingProduct, setBookingProduct } = useContext(ModalContext)

    // const id = useLoaderData()
    // const [booked, setBooked] = useState(false)

    // const { data: categoryProducts = [], isLoading, refetch } = useQuery({
    //     queryKey: ["category", id],
    //     queryFn: async () => {
    //         const res = await fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/category/${id}`, {
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

    const handleReport = product => {

        const report = {
            productId: product._id,
            productName: product.productName,
            sellerEmail: product.sellerEmail,
            sellerName: product.sellerName
        }

        axios.post("https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/report", report, {
            headers: {
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then(res => {
            if (res.data.acknowledged) {
                toast.success("Report successfull")
            }
        }).catch(err => console.log(err))
    }


    const navigation = useNavigation()



    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }



    return (
        <div>
            {
                categoryProducts.length ?
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
                                categoryProducts.map(product => <CategoryProductCard key={product._id} product={product} setBookingProduct={setBookingProduct} handleReport={handleReport}></CategoryProductCard>


                                )
                            }

                        </div>
                    </div>
                    :
                    <h3 className='text-3xl my-4'>All Items Sold</h3>
            }



        </div>
    );
};

export default CategoryProducts;