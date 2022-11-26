import React from 'react';
import CategoryNames from './CategoryNames/CategoryNames';

const CategoryProducts = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-6 lg:grid-cols-4 gap-4 ' >
            <div className='md:col-span-2 lg:col-span-1 '>
                <div className={`mt-20 sticky top-20 h-auto`}>
                    <div className={` rounded-2xl `}>
                        {
                            <CategoryNames></CategoryNames>
                        }
                    </div>
                </div>
            </div>
            <div className={`md:col-span-4 lg:col-span-3`}>


                {

                }

            </div>
        </div>
    );
};

export default CategoryProducts;