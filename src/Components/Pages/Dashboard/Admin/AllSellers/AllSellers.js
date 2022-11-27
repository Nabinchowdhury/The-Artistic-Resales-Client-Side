import React from 'react';
import UserRow from '../../../Shared/UserRow/UserRow';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../../Spinner/Spinner';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ["allSellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users?role=Seller", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }

            })
            const data = res.json()
            return data
        }
    })

    const deleteUser = (email) => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then((res) => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    toast.success("Deleted Successfully")
                    refetch()
                }
            })
            .catch(err => {
                toast.error("Deletion Failed ")
                console.log(err)
            })
    }



    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mt-8'>
            {
                allSellers.length ? <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSellers.map((seller, i) => <UserRow key={seller._id} index={i} userData={seller} deleteUser={deleteUser}></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
                    :
                    <h3 className='text-3xl text-center my-32'>No Seller found</h3>
            }

        </div>
    );
};

export default AllSellers;

