import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* Buyer */}
                        <li><Link>My Orders</Link></li>

                        {/* seller */}
                        <li><Link>Add A Product</Link></li>
                        <li><Link>My Products</Link></li>
                        <li><Link>My Buyers</Link></li>

                        {/* Admin */}
                        <li><Link>All Sellers</Link></li>
                        <li><Link>All Buyers</Link></li>
                        <li><Link>Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;





