import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useRole from '../../Hooks/useRole/useRole';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [userRole] = useRole(user?.email)

    return (
        <div>
            <h1 className="text-3xl mt-32">Hi! {user?.displayName} ,  Welcome to {userRole} dashboard. Please, Check available routes on your left.</h1>
        </div>
    );
};

export default Dashboard;