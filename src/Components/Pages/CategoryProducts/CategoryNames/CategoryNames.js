import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';

const CategoryNames = () => {
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories")
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div tabIndex={0} className={`collapse collapse-open border border-base-300 bg-base-100 rounded-box`}>
            <div className={`collapse-title text- md:text-lg lg:text-xl font-medium `}>
                <h3 className="text-left ">Category Names</h3>
            </div>
            <div className="collapse-content ">
                {
                    categories.map((category, index) => <li key={index} className='text-left ml-3 hover:underline'><Link to={`/category/${category}`}>{category}</Link></li>)
                }

            </div>
        </div>
    );
};

export default CategoryNames;