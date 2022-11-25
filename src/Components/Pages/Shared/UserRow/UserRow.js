import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const UserRow = ({ index, userData }) => {

    const { _id, name, email, role, verified } = userData
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <>
                    {
                        role === "Seller" &&
                        <>
                            {
                                verified ? <p className='inline'><FaCheck className='inline text-green-600'></FaCheck> Verified</p> : <button className='btn btn-success btn-xs '>Verify</button>
                            }
                        </>
                    }
                    <button className='btn btn-error btn-xs ml-2'>Delete</button>
                </>

            </td>
        </tr>
    );
};

export default UserRow;