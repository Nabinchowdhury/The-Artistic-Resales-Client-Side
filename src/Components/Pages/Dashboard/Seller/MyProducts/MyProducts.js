import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../../Spinner/Spinner';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myProducts = [], isloading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }
            })
            const data = res.json()
            return data;
        }
    })

    if (isloading) {
        return <Spinner></Spinner>

    }

    const deleteProduct = (id) => {
        // console.log(id)
        fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/products/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.deletedCount > 0) {
                    toast.success("Deleted Successfully")
                    refetch()
                }
            }).catch(err => console.log(err))
    }

    const handleAdvertisement = (id) => {
        console.log(id)
        fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/advertisement/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.acknowledged) {
                    toast.success("Advertised Successfully")
                    refetch()
                }
            }).catch(err => console.log(err))

    }

    return (
        <>
            {
                myProducts.length ? <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Sales Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myProducts.map((product, i) => <tr key={i} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>$ {product.price} </td>
                                    <td>{product.status}</td>
                                    <td>
                                        <>

                                            {
                                                product.status === "Available" && <>
                                                    {
                                                        product.isAdvertised ? "Advertised" : <button className='btn btn-primary btn-xs ' onClick={() => { handleAdvertisement(product._id) }}>Advertise</button>
                                                    }</>
                                            }


                                            {product.status === "Available" ? <button className='btn btn-error btn-xs ml-2' onClick={() => deleteProduct(product._id)}>Delete</button>
                                                :
                                                <h2>No action Possible</h2>
                                            }
                                        </>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                    :
                    <h3 className='text-3xl text-center my-32'>No Products</h3>

            }
        </>
    );
};

export default MyProducts;