import React, { useState } from 'react';
import UserRow from '../../../Shared/UserRow/UserRow';

const AllSellers = () => {
    const [allSellers, setAllSellers] = useState([1])
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
                                allSellers.map((seller, i) => <UserRow key={seller._id} index={i} userData={seller} ></UserRow>)
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

