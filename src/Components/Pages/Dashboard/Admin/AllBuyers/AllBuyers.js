import React from 'react';
import UserRow from '../../../Shared/UserRow/UserRow';
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../../Spinner/Spinner';

const AllBuyers = () => {
    const { data: allBuyers = [], isLoading, refetch, error } = useQuery({
        queryKey: ["allBuyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users?role=Buyer", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }
            })
            const data = res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className=' mt-8'>
            {
                allBuyers.length ? <div className="overflow-x-auto">
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
                                allBuyers.map((Buyer, i) => <UserRow key={Buyer._id}
                                    index={i} userData={Buyer}></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
                    :
                    <h3 className='text-3xl text-center my-32'>No Buyer found</h3>
            }

        </div>
    );
};

export default AllBuyers;
