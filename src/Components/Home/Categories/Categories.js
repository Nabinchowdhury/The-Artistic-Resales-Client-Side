import React, { useState } from 'react';
import CategoryCards from './CategoryCards/CategoryCards';

const Categories = () => {
    const [categories, setCategories] = useState([1, 1, 1])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-32'>
            {
                categories.map(category => <CategoryCards ></CategoryCards>)
            }


        </div>
    );
};

export default Categories;