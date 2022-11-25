import React, { useState } from 'react';
import UserRow from '../../../Shared/UserRow/UserRow';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([1])
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
