import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

import Spinner from '../../../../Spinner/Spinner';



const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [spinner, setSpinner] = useState(false)

    const handleAddProduct = (data) => {
        // console.log(data);
        setSpinner(true)
        const productDetails = {
            productName: data.productName,
            image: data.image,
            price: data.price,
            category: data.category,
            condition: data.condition,
            mobileNo: data.mobileNo,
            location: data.location,
            purchaseYear: data.purchaseYear,
            description: data.description,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            date: new Date()
        }
        // console.log(productDetails)
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            },
            body: JSON.stringify(productDetails)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Product added successfully")
                    navigate("/dashboard/seller/myProducts")
                }
                setSpinner(false)
            })
            .catch(err => { console.log(err) })

    }
    return (
        <div className='mt-10 '>
            {
                spinner && <Spinner></Spinner>
            }
            <div className='w-full md:w-1/2 p-7 mx-auto'>
                <h2 className='text-xl text-center'>Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productName", {
                            required: "Product Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("price", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Catergory</span></label>
                        <select
                            {...register("category", {
                                required: "category is Required"
                            })} className="select select-bordered w-full ">

                            <option>Guitar</option>
                            <option>Guitar Processor</option>
                            <option>Drums</option>
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Condition Type</span></label>
                        <select
                            {...register("condition", {
                                required: "condition is Required"
                            })} className="select select-bordered w-full ">

                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Image</span></label>
                        <input type="text" {...register("image", {
                            required: "image is Required"
                        })} className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Mobile No</span></label>
                        <input type="text" {...register("mobileNo", {
                            required: "mobileNo is Required"
                        })} className="input input-bordered w-full" />
                        {errors.mobileNo && <p className='text-red-500'>{errors.mobileNo.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Year Of Purchase</span></label>
                        <input type="text" {...register("purchaseYear", {
                            required: "purchaseYear is Required"
                        })} className="input input-bordered w-full" />
                        {errors.purchaseYear && <p className='text-red-500'>{errors.purchaseYear.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea {...register("description", {
                            required: "description is Required"
                        })} className="textarea textarea-bordered" ></textarea>

                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                    <input className='btn  w-full mt-4' value="Add Product" type="submit" />

                </form>


            </div>
        </div>
    );
};

export default AddProduct;