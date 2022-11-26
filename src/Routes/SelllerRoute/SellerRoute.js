import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Contexts/AuthProvider';
import useRole from '../../Components/Hooks/useRole/useRole';
import Spinner from '../../Components/Spinner/Spinner';

const SellerRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext)
    const location = useLocation()

    const [userRole, roleLoading] = useRole(user?.email)

    if (loading || roleLoading) {
        return <Spinner></Spinner>
    }

    if (user && userRole === "Seller") {
        return children;
    }

    if (userRole !== "Seller") {
        logOut()
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;