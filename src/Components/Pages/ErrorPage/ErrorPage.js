import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const error = useRouteError()
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000" alt="" className='h-96 mx-auto' />
            <h3 className="text-2xl text-red-600">Ops! Something Wrong.</h3>
            <p>{error.status || error.message}</p>
            <h2><button className='btn btn-error' onClick={() => handleLogOut()}>Logout</button></h2>
        </div>
    );
};

export default ErrorPage;