import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import useRole from '../../../../Hooks/useRole/useRole';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2>My products</h2>

        </div>
    );
};

export default MyProducts;