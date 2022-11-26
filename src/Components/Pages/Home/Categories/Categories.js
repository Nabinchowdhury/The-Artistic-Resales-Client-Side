import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoryCards from './CategoryCards/CategoryCards';

const Categories = () => {
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories")
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    return (
        <div>
            <h3 className='text-4xl font-bold my-20'>Select Categories</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-32'>
                {
                    categories.map((category, i) => <CategoryCards key={i} category={category}></CategoryCards>)
                }


            </div>
        </div>
    );
};

export default Categories;