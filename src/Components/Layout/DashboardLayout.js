import React, { createContext, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../Hooks/useRole/useRole';
import Header from '../Pages/Shared/Header/Header';



const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [userRole] = useRole(user?.email)


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">

                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* Buyer */}
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/myWishlist">My Wishlist</Link></li>

                        {/* seller */}
                        {userRole === "Seller" && <>
                            <li><Link to="/dashboard/seller/addProduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/seller/myProducts">My Products</Link></li>
                            <li><Link>My Buyers</Link></li>
                        </>}

                        {/* Admin */}
                        {
                            userRole === "Admin" && <>
                                <li><Link to="/dashboard/admin/sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/admin/buyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/admin/reportedItems">Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;





