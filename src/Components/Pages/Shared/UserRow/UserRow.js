import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const UserRow = ({ index, userData, deleteUser, handleVerify }) => {

    const { _id, name, email, role, isVerified } = userData
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
                                isVerified ? <p className='inline'><FaCheck className='inline text-blue-600'></FaCheck> Verified</p> : <button className='btn btn-success btn-xs ' onClick={() => handleVerify(email)}>Verify</button>
                            }
                        </>
                    }
                    <button className='btn btn-error btn-xs ml-2' onClick={() => deleteUser(email)}>Delete</button>
                </>

            </td>
        </tr>
    );
};

export default UserRow;