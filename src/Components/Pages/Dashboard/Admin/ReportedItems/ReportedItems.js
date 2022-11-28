import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../../Spinner/Spinner';

const ReportedItems = () => {

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ["reports"],
        queryFn: async () => {
            const res = await fetch("https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/report", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                }

            })
            const data = res.json()
            return data
        }
    })

    const deleteUser = (email) => {


        fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/users/${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            }
        }).then((res) => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    toast.success("Deleted Successfully")
                    refetch()
                }
            })
            .catch(err => {
                toast.error("Deletion Failed ")
                console.log(err)
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <>
            {
                reports.length ? <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Seller</th>
                                <th>Reporter</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                reports.map((report, i) => <tr key={i} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{report.productName}</td>
                                    <td>{report.sellerEmail} </td>
                                    <td>{report.reporterEmail}</td>
                                    <td> <button className='btn btn-error btn-xs ml-2' onClick={() => deleteUser(report.sellerEmail)}>Delete</button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                    :
                    <h3 className='text-3xl text-center my-32'>No Rported Item</h3>

            }
        </>
    );
};

export default ReportedItems;