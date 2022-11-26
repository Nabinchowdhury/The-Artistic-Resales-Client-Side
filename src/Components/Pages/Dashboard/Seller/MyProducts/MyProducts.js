import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../../Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myProducts = [], isloading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
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
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
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
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myProducts.map((product, i) => <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>$ {product.price} </td>
                                    <td>{product.status ? <>{product.status}</> : "Available"}</td>
                                    <td>
                                        <>

                                            {
                                                !product.status && <>
                                                    {
                                                        product.isAdvertised ? "" : <button className='btn btn-primary btn-xs '>Advertise</button>
                                                    }</>
                                            }


                                            <button className='btn btn-error btn-xs ml-2' onClick={() => deleteProduct(product._id)}>Delete</button>
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