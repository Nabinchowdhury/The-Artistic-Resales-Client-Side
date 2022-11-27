import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../../Spinner/Spinner';

const MyOrders = () => {
    // image, title, price, and a pay button
    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ["myOrders"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders`, {
                headers: { authorization: `bearer ${localStorage.getItem("AccessToken")}` }
            })
            const data = await res.json()
            return data
        }
    })

    const handlePayment = id => {
        console.log(id);
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            {
                orders.length ? <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map((order, i) => <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-14 rounded-xl">
                                            <img src={order.itemImage} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{order.itemName}</td>
                                    <td>$ {order.price}</td>
                                    <td>
                                        {
                                            order.status === "Available" ? <button className='btn btn-success btn-sm' onClick={() => handlePayment(order._id)}>Pay</button> : <>{
                                                order.isBuyer ? "Paid" : order.status
                                            }</>
                                        }
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                    :
                    <h3 className='text-3xl text-center mt-32'>No Orders Found</h3>
            }
        </div>
    );
};

export default MyOrders;